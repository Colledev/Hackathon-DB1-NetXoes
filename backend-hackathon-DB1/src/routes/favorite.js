const express = require("express");
const router = express.Router();
const favoriteController = require("../controllers/favoriteController");
const { authenticateMiddleware } = require("../middlewares/authentication");

router.get("/", authenticateMiddleware, favoriteController.listFavorites);

router.post("/", authenticateMiddleware, favoriteController.createFavorite);

router.delete("/", authenticateMiddleware, favoriteController.deleteFavorite);

module.exports = router;
