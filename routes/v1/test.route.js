const router = require("express").Router();
const testController = require("../../controller/test.controller");



router.router("/")
    .get(testController.getAllQuestions)





// export bookings routes
module.exports = router;