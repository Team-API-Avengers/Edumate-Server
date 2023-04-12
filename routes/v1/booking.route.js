const router = require("express").Router();
const bookingController = require("../../controller/booking.controller");


router.route("/")
    .post(bookingController.createBooking)
    .get(bookingController.getAllBookings)


router.route("/:id")
    .get(bookingController.getABookingInfo)
    .delete(bookingController.deleteBooking)
    .patch(bookingController.updateAbooking)


// export bookings routes
module.exports = router;