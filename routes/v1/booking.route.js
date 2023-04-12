const router = require("express").Router();
const bookingController = require("../../controller/booking.controller");


router.route("/")
    .post(bookingController.createBooking)
    .get(bookingController.getAllBookings)


router.route("/:id")
    .get(bookingController.getABookingInfo)



module.exports = router;