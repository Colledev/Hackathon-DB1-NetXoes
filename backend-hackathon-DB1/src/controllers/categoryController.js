const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const listCategory = async (req, res) => {
    try {
        const category = await prisma.category.findMany();
        res.json(category);
    } catch (error) {
        console.error("An error occurred while fetching category:", error);
        res.status(500).json({
            message: "An error occurred while fetching category",
        });
    }
};

module.exports = {
    listCategory,
};
