const express = require("express");
const router = express.Router();
const testController = require("../../controller/test.controller");



router.route("/")
// .post(testController.postAllQuestions)
    .get(testController.getAllQuestions)





// export bookings routes
module.exports = router;