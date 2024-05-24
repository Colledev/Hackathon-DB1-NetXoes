const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const listFavorites = async (req, res) => {
    try {
        const loggedUserId = req.loggedUser.id;

        const favorites = await prisma.favorite.findMany({
            where: {
                userId: loggedUserId,
            },
            include: {
                product: true,
            },
        });

        res.status(200).json(favorites);
    } catch (error) {
        console.error("Error fetching favorites:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

const createFavorite = async (req, res) => {
    try {
        const newFavorite = await prisma.favorite.create({
            data: req.body,
        });
        res.status(201).json({ message: "Favorite created", newFavorite });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};

const deleteFavorite = async (req, res) => {
    const { id } = req.params;
    try {
        await prisma.favorite.delete({
            where: {
                id: id,
            },
        });
        res.status(204).json({ message: "Favorite deleted", id });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};

module.exports = {
    listFavorites,
    createFavorite,
    deleteFavorite,
};
