const { createUser } = require("../repositorys/usersRepository");
const { hashPassword } = require("../utils/password");

const createUserController = async (req, res) => {
    try {
        req.body.password = hashPassword(req.body.password);
        const newUser = await createUser(req.body);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
};

module.exports = {
    createUserController,
};
