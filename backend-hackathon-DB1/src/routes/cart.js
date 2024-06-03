const cartController = require("../controllers/cartController");
const itemCartController = require("../controllers/ItemCartController");
const express = require("express");
const router = express.Router();
const { authenticateMiddleware } = require("../middlewares/authentication");

router.get("/", authenticateMiddleware, cartController.listCart);
router.post("/", authenticateMiddleware, cartController.createCart);
router.post(
    "/conclude",
    authenticateMiddleware,
    cartController.concludePurchase
);
router.get("/orders", authenticateMiddleware, cartController.listOrders);

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
