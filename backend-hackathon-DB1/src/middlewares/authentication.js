const { verifyToken } = require("../utils/token");

const authenticateMiddleware = async (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        res.status(401).send({ message: "Token not found" });
        return;
    }

    try {
        const payload = verifyToken(token);

        const user = await prisma.user.findUnique({
            where: {
                id: payload.id,
            },
        });

        req.loggedUser = user;
        next();
    } catch (error) {
        res.status(401).send({ message: "Token invalid" });
    }
};

module.exports = {
    authenticateMiddleware,
};
