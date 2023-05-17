const express = require("express");
const router = express.Router();
const assesmentController = require("../../controller/assesment.controller")

router.route("/")
.post(assesmentController.createAssesment)

router.route("/email")
.get(assesmentController.getAssesment)

module.exports = router;