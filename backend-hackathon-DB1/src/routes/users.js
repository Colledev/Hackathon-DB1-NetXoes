const { Router } = require("express");
const usersController = require("../controllers/usersController");
const {
    validateCreateUser,
    validateLoginUser,
} = require("../validators/usersValidators");
const { authenticateMiddleware } = require("../middlewares/authentication");

const router = Router();

router.post("/", validateCreateUser, usersController.createUserController);
router.post("/login", validateLoginUser, usersController.loginUserController);
router.get("/me", authenticateMiddleware, usersController.listMyUserController);
router.put(
    "/me",
    validateCreateUser,
    authenticateMiddleware,
    usersController.updateMyUserController
);

module.exports = router;
