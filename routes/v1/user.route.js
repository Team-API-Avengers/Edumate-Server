const express = require("express");
const userController = require("../../controller/user.controller");
const router = express.Router();

router.route("/")
    .post(userController.createAUser)
    .get(userController.getAllUser)





module.exports = router;