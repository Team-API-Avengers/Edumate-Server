const router = require("express").Router();
const bookingController = require("../../controller/booking.controller");


router.route("/")
    .post(bookingController.createBooking)
    .get(bookingController.getAllBookings)

router.route("/teacher/email")
    .get(bookingController.getBookingStudent)

router.route("/student/email")
    .get(bookingController.getABookingByEmail)


router.route("/:id")
    .get(bookingController.getABookingInfo)
    .delete(bookingController.deleteBooking)
    .patch(bookingController.updateAbooking)




// export bookings routes
module.exports = router;