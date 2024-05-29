const brandController = require("../controllers/brandController");
const express = require("express");
const router = express.Router();

router.get("/", brandController.listBrands);

module.exports = router;
