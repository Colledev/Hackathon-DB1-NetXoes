const express = require("express");
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const { calculateInstallment } = require("../utils/calculateInstallment");

const prisma = new PrismaClient();

router.get("/", async (req, res) => {
    try {
        const products = await prisma.product.findMany({
            include: {
                installment: true,
            },
        });

        const productsWithInstallment = products.map((product) => {
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

        res.json(productsWithInstallment);
    } catch (error) {
        console.error("An error occurred while fetching products:", error);
        res.status(500).json({
            message: "An error occurred while fetching products",
        });
    }
});

module.exports = router;
