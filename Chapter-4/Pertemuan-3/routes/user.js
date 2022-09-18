const express = require("express");
const router = express.Router();
const controller = require("../controllers");

//localhost:3000/users
router.get("/", controller.user.getAll);
router.get("/:userId", controller.user.showDetail); // mengirimkan params ke controller
router.post("/", controller.user.createUser);
router.put("/:userId", controller.user.updateUser);
router.delete("/:userId", controller.user.deleteUser);

module.exports = router;
