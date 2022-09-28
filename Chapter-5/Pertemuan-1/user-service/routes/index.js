const express = require("express");
const router = express.Router();
const c = require("../controllers");

router.post("/find", c.findOne);
router.post("/create", c.create);

module.exports = router;
