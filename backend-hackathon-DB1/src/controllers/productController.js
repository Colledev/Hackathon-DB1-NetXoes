const { PrismaClient } = require("@prisma/client");
const { calculateInstallment } = require("../utils/calculateInstallment");

const prisma = new PrismaClient();

const listProducts = async (req, res) => {
    const { page, limit, skip } = req.pagination || {};

    try {
        let products;
        if (page && limit) {
            products = await prisma.product.findMany({
                skip: skip,
                take: limit,
                include: {
                    installment: true,
                    brand: true,
                    category: true,
                },
            });
        } else {
            products = await prisma.product.findMany({
                include: {
                    installment: true,
                    brand: true,
                    category: true,
                },
            });
        }

        const totalProducts = await prisma.product.count();

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

const listProductsperFilter = async (req, res) => {};

module.exports = {
    listProducts,
    getProductById,
};
