const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const listItemCart = async (req, res) => {
    try {
        const loggedUserId = req.loggedUser.id;

        const itemsCart = await prisma.itemCart.findMany({
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

        res.status(200).json(itemsCart);
    } catch (error) {
        console.error("Error fetching items cart:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

const createItemCart = async (req, res) => {
    try {
        const loggedUserId = req.loggedUser.id;
        const { productId, quantity } = req.body;

        let cart = await prisma.cart.findFirst({
            where: {
                userId: loggedUserId,
            },
        });

        if (!cart) {
            cart = await prisma.cart.create({
                data: {
                    userId: loggedUserId,
                },
            });
        }

        const existingItemCart = await prisma.itemCart.findUnique({
            where: {
                userId_productId: {
                    userId: loggedUserId,
                    productId: productId,
                },
            },
        });

        if (existingItemCart) {
            const updatedItemCart = await prisma.itemCart.update({
                where: {
                    id: existingItemCart.id,
                },
                data: {
                    quantity: existingItemCart.quantity + quantity,
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

            res.status(200).json(updatedItemCart);
        } else {
            const newItemCart = await prisma.itemCart.create({
                data: {
                    userId: loggedUserId,
                    productId: productId,
                    quantity: quantity,
                    carts: {
                        connect: {
                            id: cart.id,
                        },
                    },
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

            res.status(201).json(newItemCart);
        }
    } catch (error) {
        console.error("Error creating item cart:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

const updateItemCart = async (req, res) => {
    try {
        const loggedUserId = req.loggedUser.id;

        const { id } = req.params;
        const { quantity } = req.body;

        const itemCart = await prisma.itemCart.findUnique({
            where: {
                id: id,
            },
        });

        if (!itemCart) {
            return res.status(404).json({ error: "Item cart not found" });
        }

        if (itemCart.userId !== loggedUserId) {
            return res.status(403).json({ error: "Forbidden" });
        }

        const updatedItemCart = await prisma.itemCart.update({
            where: {
                id: id,
            },
            data: {
                quantity: quantity,
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

        res.status(200).json(updatedItemCart);
    } catch (error) {
        console.error("Error updating item cart:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

const deleteItemCart = async (req, res) => {
    try {
        const loggedUserId = req.loggedUser.id;

        const { id } = req.params;

        const itemCart = await prisma.itemCart.findUnique({
            where: {
                id: id,
            },
        });

        if (!itemCart) {
            return res.status(404).json({ error: "Item cart not found" });
        }

        if (itemCart.userId !== loggedUserId) {
            return res.status(403).json({ error: "Forbidden" });
        }

        await prisma.itemCart.delete({
            where: {
                id: id,
            },
        });

        res.status(204).end();
    } catch (error) {
        console.error("Error deleting item cart:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = {
    listItemCart,
    createItemCart,
    updateItemCart,
    deleteItemCart,
};
