const cartController = require("../controllers/cartController");
const itemCartController = require("../controllers/itemCartController");
const express = require("express");
const router = express.Router();
const { authenticateMiddleware } = require("../middlewares/authentication");

router.post("/", cartController.createCart);

router.get("/item", authenticateMiddleware, itemCartController.listItemCart);
router.post("/item", authenticateMiddleware, itemCartController.createItemCart);
router.put(
    "/item/:id",
    authenticateMiddleware,
    itemCartController.updateItemCart
);
router.delete(
    "/item/:id",
    authenticateMiddleware,
    itemCartController.deleteItemCart
);

module.exports = router;
