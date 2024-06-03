const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const listCart = async (req, res) => {
    try {
        const loggedUserId = req.loggedUser.id;

        const cart = await prisma.cart.findMany({
            where: {
                userId: loggedUserId,
            },
            include: {
                items: {
                    include: {
                        product: true,
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

        const orderProductsPromises = [];

        for (const item of itemsCart) {
            const orderProductPromise = prisma.orderProduct.create({
                data: {
                    cart: { connect: { id: cart.id } },
                    product: { connect: { id: item.product.id } },
                    quantity: item.quantity,
                },
            });
            orderProductsPromises.push(orderProductPromise);
        }

        await Promise.all(orderProductsPromises);

        await prisma.cart.update({
            where: {
                id: cart.id,
            },
            data: {
                concluded: true,
                concludedAt: new Date(),
            },
        });

        await prisma.itemCart.deleteMany({
            where: {
                userId: loggedUserId,
            },
        });

        res.status(201).json({ message: "Purchase concluded" });
    } catch (error) {
        console.error("Error concluding purchase:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

const listOrders = async (req, res) => {
    try {
        const loggedUserId = req.loggedUser.id;
        const { cartId } = req.params;

        const orders = await prisma.orderProduct.findMany({
            where: {
                cartId: cartId,
                cart: {
                    userId: loggedUserId,
                },
            },
            include: {
                product: {
                    include: {
                        brand: true,
                        installment: true,
                    },
                },
                cart: {
                    select: {
                        concludedAt: true,
                    },
                },
            },
            orderBy: {
                cart: {
                    concludedAt: "desc",
                },
            },
        });

        orders.forEach((order) => {
            order.cart.concludedAt = order.cart.concludedAt
                ? new Date(order.cart.concludedAt).toISOString().split("T")[0]
                : null;
        });

        res.status(200).json(orders);
    } catch (error) {
        console.error("Error listing orders:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = {
    listCart,
    createCart,
    concludePurchase,
    listOrders,
};
