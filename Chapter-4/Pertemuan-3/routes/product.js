const express = require("express");
const router = express.Router();
const controller = require("../controllers");

router.get("/", controller.product.getAll);
router.get("/:productId", controller.product.showDetail); // mengirimkan params ke controller
router.post("/", controller.product.createProduct);
router.put("/:productId", controller.product.updateProduct);
router.delete("/:productId", controller.product.deleteProduct);

module.exports = router;
