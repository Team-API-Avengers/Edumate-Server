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

router.route("/useremail/:email")
.get(userController.getUserByEmail)

router.route("/dash/student")
.get(userController.getUserAsStudent)

router.route("/dash/teacher")
.get(userController.getUserAsTeacher)

router.route("/dash/admin")
.get(userController.getUserAsAdmin)

module.exports = router;