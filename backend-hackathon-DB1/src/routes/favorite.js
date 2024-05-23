const express = require("express");
const router = express.Router();
const favoriteController = require("../controllers/favoriteController");

router.get("/", favoriteController.listFavorites);

router.post("/", favoriteController.createFavorite);

router.delete("/:id", favoriteController.deleteFavorite);

module.exports = router;
