const express = require("express");
const router = express.Router();
const tutorTestController  = require("../../controller/tutorTest.controller")

router.route("/")
.post(tutorTestController.createTutorTest)

router.route("/email")
.get(tutorTestController.getTutorTest)

module.exports = router;