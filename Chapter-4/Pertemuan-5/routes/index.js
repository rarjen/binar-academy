const express = require("express");
const router = express.Router();
const c = require("../controllers");

router.post("/auth/register", c.auth.register);
router.post("/auth/login", c.auth.login);
module.exports = router;
