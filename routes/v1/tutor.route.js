const express = require("express");
const router = express.Router();
const tutorController = require("../../controller/tutor.controller");


// tutor route started--------
router.route("/")
    .get(tutorController.getTutor)
    .post(tutorController.createTutor)

// get tutor by there background ----
router.route("/instructor/:background")
    .get(tutorController.getTutorByCategory)


// update a tutor-------
router.route("/:id")
    .get(tutorController.getTutorById)
    .patch(tutorController.updateTutor)
    .delete(tutorController.deleteTutor)


// search tutors from location -----

router.route("/location/:search")
    .get(tutorController.getTutorByLocation)


module.exports = router;