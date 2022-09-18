const express = require("express");
const router = express.Router();
const user = require("./user");
const product = require("./product");

router.use("/users", user); // memasangkan prefix /users
router.use("/products", product); // memasangkan prefix /product

module.exports = router;
