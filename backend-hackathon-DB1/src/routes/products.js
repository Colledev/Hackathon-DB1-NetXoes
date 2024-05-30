const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const paginationMiddleware = require("../middlewares/pagination");

router.get("/", paginationMiddleware, productController.listProducts);
router.get("/:id", productController.getProductById);

module.exports = router;
