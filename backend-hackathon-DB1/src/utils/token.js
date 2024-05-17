const jwt = require("jsonwebtoken");

const { JWT_TOKEN } = process.env;

const generateToken = (payload) => {
    return jwt.sign(payload, JWT_TOKEN, { expiresIn: "7d" });
};

const verifyToken = (token) => {
    return jwt.verify(token, JWT_TOKEN);
};

module.exports = {
    generateToken,
    verifyToken,
};
