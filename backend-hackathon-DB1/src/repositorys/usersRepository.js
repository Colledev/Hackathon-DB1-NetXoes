const { prisma } = require("../utils/prisma");

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

module.exports = {
    createUser,
};
