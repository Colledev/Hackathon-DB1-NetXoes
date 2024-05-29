const categoryController = require("../controllers/categoryController");
const express = require("express");
const router = express.Router();

router.get("/", categoryController.listCategory);

module.exports = router;
