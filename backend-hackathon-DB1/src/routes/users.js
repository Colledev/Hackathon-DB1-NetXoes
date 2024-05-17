const { Router } = require("express");
const usersController = require("../controllers/usersController");
const {
    validateCreateUser,
    validateLoginUser,
} = require("../validators/usersValidators");

const router = Router();

router.post("/", validateCreateUser, usersController.createUserController);
router.post("/login", validateLoginUser, usersController.loginUserController);

module.exports = router;
