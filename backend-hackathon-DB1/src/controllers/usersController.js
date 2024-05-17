const { createUser, loginUser } = require("../repositorys/usersRepository");
const { hashPassword } = require("../utils/password");
const { validationResultCheck } = require("../validators/index");
const { isUniqueEmailError } = require("../utils/errorMessages");
const { generateToken } = require("../utils/token");

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
        const user = await loginUser(req.body);

        const token = generateToken(user);
        res.status(200).json({ token, message: "Login successful" });
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};

module.exports = {
    createUserController,
    loginUserController,
};
