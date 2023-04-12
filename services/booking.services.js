const Booking = require("../models/booking");


// create a new booking ----
exports.createBookingServices = async (data) => {
    const result = await Booking.create(data);
    return result;
};


// get all booking services ----
exports.getAllBookingsServices = async () => {
    const result = await Booking.find({});
    return result;
};


// get a booking info  -----

exports.getABookingInfoServices = async (id) => {
    const result = await Booking.findOne({ _id: id });
    return result;
}