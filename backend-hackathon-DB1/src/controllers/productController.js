const { PrismaClient } = require("@prisma/client");
const { calculateInstallment } = require("../utils/calculateInstallment");

const prisma = new PrismaClient();

const listProducts = async (req, res) => {
    const { page, limit, skip } = req.pagination || {};
    const { brand, category, name, sort, order } = req.query;

    try {
        let filter = {};

        let sortQuery = {};

        if (sort && order) {
            if (sort === "name") {
                sortQuery = { name: order };
            } else if (sort === "price") {
                sortQuery = { price: order };
            }
        }

        if (brand) {
            const brands = Array.isArray(brand) ? brand : [brand];
            const brandIds = await Promise.all(
                brands.map(async (brandName) => {
                    const brandInfo = await prisma.brand.findFirst({
                        where: {
                            name: {
                                equals: brandName,
                                mode: "insensitive",
                            },
                        },
                        select: {
                            id: true,
                        },
                    });
                    return brandInfo ? brandInfo.id : null;
                })
            );

            filter.brandId = {
                in: brandIds.filter((id) => id !== null),
            };
        }

        if (category) {
            const categories = Array.isArray(category) ? category : [category];
            const categoryIds = await Promise.all(
                categories.map(async (categoryName) => {
                    const categoryInfo = await prisma.category.findFirst({
                        where: {
                            name: {
                                equals: categoryName,
                                mode: "insensitive",
                            },
                        },
                        select: {
                            id: true,
                        },
                    });
                    return categoryInfo ? categoryInfo.id : null;
                })
            );

            filter.categoryId = {
                in: categoryIds.filter((id) => id !== null),
            };
        }

        if (name) {
            filter.name = {
                contains: name,
                mode: "insensitive",
            };
        }

        let products;

        if (page && limit) {
            products = await prisma.product.findMany({
                where: filter,
                skip: skip,
                take: limit,
                include: {
                    installment: true,
                    brand: true,
                    category: true,
                },
                orderBy: sortQuery,
            });
        } else {
            products = await prisma.product.findMany({
                where: filter,
                include: {
                    installment: true,
                    brand: true,
                    category: true,
                },
                orderBy: sortQuery,
            });
        }

        const totalProducts = await prisma.product.count({
            where: filter,
        });

        const productsWithInstallmentAndBrand = products.map((product) => {
            if (product.installment) {
                const installmentAmount = calculateInstallment(
                    product.price,
                    product.installment.interestRate,
                    product.installment.number
                );

                const formattedInstallment = installmentAmount.toFixed(2);

                return {
                    ...product,
                    installment: {
                        ...product.installment,
                        formattedInstallment: formattedInstallment,
                    },
                };
            } else {
                return product;
            }
        });

        res.json(
            page && limit
                ? {
                      products: productsWithInstallmentAndBrand,
                      totalProducts,
                      totalPages: Math.ceil(totalProducts / limit),
                      currentPage: page,
                      filter: { brand, category, name, sort, order },
                  }
                : productsWithInstallmentAndBrand
        );
    } catch (error) {
        console.error("An error occurred while fetching products:", error);
        res.status(500).json({
            message: "An error occurred while fetching products",
        });
    }
};

const getProductById = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await prisma.product.findUnique({
            where: {
                id: id,
            },
            include: {
                installment: true,
                brand: true,
            },
        });

        if (!product) {
            return res.status(404).json({
                message: "Product not found",
            });
        }

        if (product.installment) {
            const installmentAmount = calculateInstallment(
                product.price,
                product.installment.interestRate,
                product.installment.number
            );

            const formattedInstallment = installmentAmount.toFixed(2);

            res.json({
                ...product,
                installment: {
                    ...product.installment,
                    formattedInstallment: formattedInstallment,
                },
            });
        } else {
            res.json(product);
        }
    } catch (error) {
        console.error("An error occurred while fetching product:", error);
        res.status(500).json({
            message: "An error occurred while fetching product",
        });
    }
};

module.exports = {
    listProducts,
    getProductById,
};
