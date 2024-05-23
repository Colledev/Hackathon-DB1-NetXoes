const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const listFavorites = async (req, res) => {
    try {
        const favorites = await prisma.favorite.findMany();
        res.json(favorites);
    } catch (error) {
        res.status(400).send({ message: error.message });
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
        res.json({ message: `Favorite with id ${id} deleted` });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};

module.exports = {
    listFavorites,
    createFavorite,
    deleteFavorite,
};
