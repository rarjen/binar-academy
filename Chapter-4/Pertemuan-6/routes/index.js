const express = require("express");
const router = express.Router();
const c = require("../controllers");
const mid = require("../helper/middleware");

router.post("/auth/register", c.auth.register);
router.post("/auth/login", c.auth.login);
router.get("/auth/whoami", mid.mustLogin, c.auth.whoami);

router.post("/channels", mid.mustLogin, c.channels.create);
router.get("/channels", mid.mustLogin, c.channels.index);
router.get("/channels/:channel_id", mid.mustLogin, c.channels.show);

router.post("/videos", mid.mustLogin, c.videos.create);
router.get("/videos", mid.mustLogin, c.videos.index);
router.get("/videos/:video_id", mid.mustLogin, c.videos.show);
router.get("/videos/show/:channel_id", mid.mustLogin, c.videos.showByChannel);

module.exports = router;
