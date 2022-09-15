const express = require("express");
const router = express.Router();

// function timeLogger(req, res, next) {
//   console.log("Time:", Date.now());
//   next(); // utk melanjutkan ke proses selanjutnya
// }

// router.use(timeLogger);

// router.get("/", (req, res) => res.send("Hello World"));
router.get("/products", (req, res) => {
  return res.json([
    { id: 1, name: "Apple" },
    { id: 2, name: "Xiaomi" },
    { id: 3, name: "Samsung" },
  ]);
});

// variable penampung
router.get("/products/:productId", (req, res) => {
  const { productId } = req.params;

  // /products/3?brand=Google
  // /products/3?brand=Google&type=pro

  let { brand, type } = req.query;

  if (!brand) {
    brand = productId == 1 ? "Apple" : productId == 2 ? "Xiaomi" : "Samsung";
  }
  //   res.json({
  //     id: +productId,
  //     name: brand,
  //     type: type ? type : null,
  //   });
  res.render("products/detail", {
    id: +productId,
    name: brand,
    type: type ? type : null,
  });
});

router.get("/orders", (req, res) => {
  return res.json([
    { id: 1, is_paid: true, user_id: 1 },
    { id: 2, is_paid: false, user_id: 2 },
    { id: 3, is_paid: false, user_id: 3 },
  ]);
});

router.get("/orders/:orderId", (req, res) => {
  const { orderId } = req.params;

  res.json({
    id: orderId,
  });
});

router.post("/products", (req, res) => {
  const { name } = req.body;
  res.json(name);
});

module.exports = router;
