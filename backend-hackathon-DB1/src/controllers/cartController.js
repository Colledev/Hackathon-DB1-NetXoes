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

const concludePurchase = async (req, res) => {
    try {
        const loggedUserId = req.loggedUser.id;

        let cart = await prisma.cart.findFirst({
            where: {
                userId: loggedUserId,
                concluded: false,
            },
        });

        if (!cart) {
            cart = await prisma.cart.create({
                data: {
                    userId: loggedUserId,
                },
            });
        }

        const itemsCart = await prisma.itemCart.findMany({
            where: {
                userId: loggedUserId,
            },
            include: {
                product: true,
            },
        });

        if (itemsCart.length === 0) {
            return res
                .status(400)
                .json({ error: "Cart is empty. Cannot conclude purchase." });
        }

        const order = await prisma.order.create({
            data: {
                user: { connect: { id: loggedUserId } },
                cart: { connect: { id: cart.id } },
            },
        });

        await prisma.itemCart.deleteMany({
            where: {
                userId: loggedUserId,
            },
        });

        const newCart = await prisma.cart.create({
            data: {
                userId: loggedUserId,
            },
        });

        await prisma.cart.update({
            where: {
                id: cart.id,
            },
            data: {
                concluded: true,
            },
        });

        res.status(201).json(order);
    } catch (error) {
        console.error("Error concluding purchase:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = {
    createCart,
    concludePurchase,
};
