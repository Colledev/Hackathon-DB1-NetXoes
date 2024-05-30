const { createUser, loginUser } = require("../repositorys/usersRepository");
const { hashPassword } = require("../utils/password");
const { validationResultCheck } = require("../validators/index");
const { isUniqueEmailError } = require("../utils/errorMessages");
const { generateToken } = require("../middlewares/authentication");

const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const createUserController = async (req, res) => {
    if (validationResultCheck(req, res)) {
        return;
    }
    try {
        req.body.password = hashPassword(req.body.password);
        const newUser = await createUser(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        if (isUniqueEmailError(error)) {
            res.status(400).send({ message: "E-mail already exists" });
            return;
        }
        res.status(400).send({ message: error.message });
    }
};

const loginUserController = async (req, res) => {
    if (validationResultCheck(req, res)) {
        return;
    }
    try {
        const { email, password } = req.body;
        const user = await loginUser({ email, password });

        const token = generateToken(user);

        res.status(200).json({ token, message: "Login successful" });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};

const listMyUserController = async (req, res) => {
    try {
        const loggedUserId = req.loggedUser.id;

        const user = await prisma.user.findUnique({
            where: { id: loggedUserId },
            select: {
                name: true,
                email: true,
            },
        });

        res.status(200).json(user);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};

const updateMyUserController = async (req, res) => {
    if (validationResultCheck(req, res)) {
        return;
    }
    try {
        const loggedUserId = req.loggedUser.id;
        const { name, email, password } = req.body;

        const existingUserWithEmail = await prisma.user.findFirst({
            where: {
                email,
                id: { not: loggedUserId },
            },
        });

        if (existingUserWithEmail) {
            return res.status(400).json({ error: "Email already in use" });
        }

        const updatedUser = await prisma.user.update({
            where: { id: loggedUserId },
            data: {
                name,
                email,
                password: hashPassword(password),
            },
        });

        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};

module.exports = {
    createUserController,
    loginUserController,
    listMyUserController,
    updateMyUserController,
};
