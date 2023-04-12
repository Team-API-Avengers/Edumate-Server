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
};


// delete a booking  ----
exports.deleteBookingServices = async (id) => {
    const result = await Booking.deleteOne({ _id: id });
    return result;
};

// edit a booking ---------------
exports.editAbookingServices = async(id,data)=>{
    const result = await Booking.updateOne({_id: id},{$set: data})
    return result
}