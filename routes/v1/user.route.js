const express = require("express");
const userController = require("../../controller/user.controller");
const router = express.Router();

router.route("/")
    .post(userController.createAUser)
    .get(userController.getAllUser)

router.route("/:id")
    .get(userController.getAUserById)
    .patch(userController.updateAUser)
    .delete(userController.deleteAUser)



module.exports = router;