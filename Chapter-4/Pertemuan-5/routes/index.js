const express = require("express");
const router = express.Router();
const c = require("../controllers");
const mid = require("../helper/middleware");

router.post("/auth/register", c.auth.register);
router.post("/auth/login", c.auth.login);
router.get("/auth/whoami", mid.mustLogin, c.auth.whoami);
router.put("/auth/changePassword", mid.mustLogin, c.auth.changePassword);
module.exports = router;
