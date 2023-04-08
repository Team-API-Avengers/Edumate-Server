const express = require("express");
const feedBackController = require('../../controller/feedback.controller')
const router = express.Router();


router.route("/")
.post(feedBackController.createAfeedBack)
.get(feedBackController.getAllFeedback)

router.route("/:email")
.get(feedBackController.getFeedbackByEmail)

router.route("/:id")
.delete(feedBackController.deleteAfeedback)
.patch(feedBackController.updateAfeedback)


module.exports = router;