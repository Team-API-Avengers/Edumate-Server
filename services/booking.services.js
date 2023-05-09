const Booking = require("../models/booking");


// create a new booking only one time ----
exports.createBookingServices = async (data) => {

    if (data) {
        const bookedData = await Booking.findOne({
            $and: [
                { teacheremail: data.teacheremail },
                { studentEmail: data.studentEmail }
            ]
        });

        console.log(bookedData);
        // const bookedData = await Booking.findOne({ teacheremail: data.teacheremail, studentEmail: data.studentEmail })
        if (bookedData) {
            const result = "already booked";
            return result
        }
        else {
            const result = await Booking.create(data);
            return result;
        }
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
exports.getBookingStudentServices = async (email) => {
    const result = await Booking.find({ teacheremail: email })
    return result
}