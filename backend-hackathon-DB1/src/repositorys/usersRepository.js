const { prisma } = require("../utils/prisma");
const { comparePassword } = require("../utils/password");

const createUser = async (user) => {
    const newUser = await prisma.user.create({
        data: user,
        select: {
            id: true,
            name: true,
            email: true,
            createdAt: true,
            updatedAt: true,
        },
    });
    return newUser;
};

const loginUser = async (user) => {
    const userFound = await prisma.user.findUnique({
        where: {
            email: user.email,
        },
        select: {
            id: true,
            name: true,
            email: true,
            createdAt: true,
            updatedAt: true,
            password: true,
        },
    });
    if (!userFound || !comparePassword(user.password, userFound.password)) {
        throw new Error("Invalid e-mail or password");
        return;
    }
    delete userFound.password;
    return userFound;
};

module.exports = {
    createUser,
    loginUser,
};
