const cartController = require("../controllers/cartController");
const itemCartController = require("../controllers/ItemCartController");
const express = require("express");
const router = express.Router();
const { authenticateMiddleware } = require("../middlewares/authentication");

router.post("/", authenticateMiddleware, cartController.createCart);
router.post(
    "/conclude",
    authenticateMiddleware,
    cartController.concludePurchase
);

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
