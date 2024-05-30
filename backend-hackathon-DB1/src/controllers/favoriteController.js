const { PrismaClient } = require("@prisma/client");
const { calculateInstallment } = require("../utils/calculateInstallment");

const prisma = new PrismaClient();

const listFavorites = async (req, res) => {
    try {
        const loggedUserId = req.loggedUser.id;

        const favorites = await prisma.favorite.findMany({
            where: {
                userId: loggedUserId,
            },
            include: {
                product: {
                    include: {
                        brand: true,
                        installment: true,
                    },
                },
            },
        });

        const favoritesWithFormattedInstallments = favorites.map((favorite) => {
            if (favorite.product.installment) {
                const installmentAmount = calculateInstallment(
                    favorite.product.price,
                    favorite.product.installment.interestRate,
                    favorite.product.installment.number
                );

                const formattedInstallment = installmentAmount.toFixed(2);

                return {
                    ...favorite,
                    product: {
                        ...favorite.product,
                        installment: {
                            ...favorite.product.installment,
                            formattedInstallment: formattedInstallment,
                        },
                    },
                };
            } else {
                return favorite;
            }
        });

        res.status(200).json(favoritesWithFormattedInstallments);
    } catch (error) {
        console.error("Error fetching favorites:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

const createFavorite = async (req, res) => {
    try {
        const loggedUserId = req.loggedUser.id;

        const existingFavorite = await prisma.favorite.findUnique({
            where: {
                userId_productId: {
                    userId: loggedUserId,
                    productId: req.body.productId,
                },
            },
        });

        if (existingFavorite) {
            return res.status(400).json({ error: "Product already favorited" });
        }

        const newFavorite = await prisma.favorite.create({
            data: {
                userId: loggedUserId,
                productId: req.body.productId,
            },
        });

        res.status(201).json({ message: "Favorite created", newFavorite });
    } catch (error) {
        console.error("Error creating favorite:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

const deleteFavorite = async (req, res) => {
    const loggedUserId = req.loggedUser.id;

    try {
        const favorite = await prisma.favorite.findUnique({
            where: {
                userId_productId: {
                    userId: loggedUserId,
                    productId: req.body.productId,
                },
            },
        });

        if (!favorite) {
            return res.status(404).json({ error: "Favorite not found" });
        }

        if (favorite.userId !== loggedUserId) {
            return res.status(403).json({ error: "Unauthorized" });
        }

        await prisma.favorite.delete({
            where: {
                id: favorite.id,
            },
        });

        res.status(204).json({ message: "Favorite deleted" });
    } catch (error) {
        console.error("Error deleting favorite:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = {
    listFavorites,
    createFavorite,
    deleteFavorite,
};
