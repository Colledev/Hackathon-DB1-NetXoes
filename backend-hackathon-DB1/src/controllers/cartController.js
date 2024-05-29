const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createCart = async (req, res) => {
    try {
        const loggedUserId = req.loggedUser.id;

        const cart = await prisma.cart.findMany({
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

        res.status(200).json(cart);
    } catch (error) {
        console.error("Error fetching cart:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = {
    createCart,
};
