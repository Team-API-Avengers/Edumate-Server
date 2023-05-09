const Booking = require("../models/booking");


// create a new booking ----
exports.createBookingServices = async (data) => {
    const bookedData = await Booking.find({_id : _id})
if(bookedData){
return "already booked"
}
    else{
    const result = await Booking.create(data);
    return result;
    }
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
exports.editAbookingServices = async (id, data) => {
    const result = await Booking.updateOne({ _id: id }, { $set: data })
    return result
};


// get a booking by email -----------
exports.getABookingByEmailServices = async (email) => {
    const result = await Booking.find({ studentEmail: email });
    return result
};

// getBookingStudentServices------------
exports.getBookingStudentServices=async(email)=>{
    const result = await Booking.find({teacheremail: email})
    return result
}