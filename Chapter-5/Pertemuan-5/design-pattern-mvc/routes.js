const express = require("express");
const router = express.Router();
const product = require("./controllers/products");

router.get("/", (req, res) => res.redirect("/products"));

router.get("/products/create", product.create); // tampilkan halaman create
router.post("/products", product.store); // create product ke db
router.get("/products", product.index); // tampilkan semua data
router.get("/products/:id", product.show); // tampilkan detail
router.get("/products/:id/edit", product.edit); // tampilkan page edit
router.put("/products/:id", product.update); // update product to db
router.delete("/products/:id", product.destroy); // delete product

module.exports = router;
