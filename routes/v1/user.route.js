const express = require("express");
const userController = require("../../controller/user.controller");
const router = express.Router();

router.route("/")
    .post(userController.createAUser)
    .get(userController.getAllUser)

router.route("/:id")
    .get(userController.getAUserById)



module.exports = router;