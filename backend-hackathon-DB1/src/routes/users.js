const { Router } = require("express");
const usersController = require("../controllers/usersController");
const { validateCreateUser } = require("../validators/usersValidators");

const router = Router();

router.post("/users", validateCreateUser, usersController.createUserController);

module.exports = router;
