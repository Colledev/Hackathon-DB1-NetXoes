const jwt = require("jsonwebtoken");
const { JWT_TOKEN } = process.env;
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const generateToken = (payload) => {
    return jwt.sign(payload, JWT_TOKEN, { expiresIn: "7d" });
};

const validateUserToken = (token) => {
    try {
        return jwt.verify(token, JWT_TOKEN);
    } catch (error) {
        throw new Error("Invalid token");
    }
};

const authenticateMiddleware = async (req, res, next) => {
    try {
        const tokenHeader = req.headers["authorization"];

        if (!tokenHeader || !tokenHeader.startsWith("Bearer ")) {
            return res.status(401).json({
                error: "Unauthorized",
                message: "Token not found or invalid format",
            });
        }

        const token = tokenHeader.split(" ")[1];
        const payload = validateUserToken(token);

        if (!payload || !payload.id) {
            return res.status(401).json({
                error: "Unauthorized",
                message: "Invalid token payload",
            });
        }

        const user = await prisma.user.findUnique({
            where: {
                id: payload.id,
            },
        });

        if (!user) {
            return res
                .status(401)
                .json({ error: "Unauthorized", message: "User not found" });
        }

        req.loggedUser = user;
        next();
    } catch (error) {
        return res
            .status(401)
            .json({ error: "Unauthorized", message: error.message });
    }
};

module.exports = {
    generateToken,
    validateUserToken,
    authenticateMiddleware,
};
