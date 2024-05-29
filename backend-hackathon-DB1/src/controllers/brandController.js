const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const listBrands = async (req, res) => {
    try {
        const brands = await prisma.brand.findMany();
        res.json(brands);
    } catch (error) {
        console.error("An error occurred while fetching brands:", error);
        res.status(500).json({
            message: "An error occurred while fetching brands",
        });
    }
};

module.exports = {
    listBrands,
};
