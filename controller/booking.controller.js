const { createBookingServices, getAllBookingsServices, getABookingInfoServices, deleteBookingServices, editAbookingServices, getABookingByEmailServices, getBookingStudentServices } = require("../services/booking.services");

// create a booking controller --
exports.createBooking = async (req, res, next) => {
    try {
        const result = await createBookingServices(req.body)
        res.status(200).json({
            status: 'success',
            massage: "Create Booking Successfully!",
            data: result
        })
    }
    catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "Create Booking Error",
            error: error.message
        })
    }
};


// get all bookings -----
exports.getAllBookings = async (req, res, next) => {
    try {
        const results = await getAllBookingsServices();
        res.status(200).json({
            status: 'success',
            massage: "Create Booking Error",
            data: results
        })
    } catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "Get Booking Error",
            error: error.message
        })
    }

};



// get a specific booking info --
exports.getABookingInfo = async (req, res, next) => {
    try {
        const results = await getABookingInfoServices(req.params.id);
        res.status(200).json({
            status: 'success',
            massage: "Get A Booking Info",
            data: results
        })
    } catch (error) {
        res.status(200).json({
            status: 'error',
            massage: "Get A Booking Error",
            error: error.message
        })
    }
};

// delete a booking --------------------------
exports.deleteBooking = async (req, res, next) => {
    try {
        const result = await deleteBookingServices(req.params.id);
        res.status(200).json({
            status: 'success',
            massage: "Delete Booking",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "error",
            massage: "Delete Booking Error",
            error: error.message
        })
    }
};

// update a booking ----------------------
exports.updateAbooking = async (req, res, next) => {
    try {
        const id = req.params.id
        const body = req.body
        const result = await editAbookingServices(id, body)
        res.status(200).json({
            status: 'success',
            massage: "Delete Booking",
            data: result
        })
    }
    catch (error) {
        res.status(400).json({
            status: "error",
            massage: "Delete Booking Error",
            error: error.message
        })
    }
};



// get a booking by getABookingByEmail ---
exports.getABookingByEmail = async (req, res, next) => {
    try {
        const email = req.query.email;
        const result = await getABookingByEmailServices(email);
        res.status(200).json({
            status: "success",
            massage: "Get Booking by email",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: "error",
            massage: "Get Booking by email Error.",
            error: error.message
        })
    }
};

// getBookingStudent api-----------
exports.getBookingStudent=async(req, res, next)=>{
    try {
        const email = req.query.email 
        const result = await getBookingStudentServices(email)
        res.status(200).json({
            status: "success",
            massage: "Get Booking by email",
            data: result
        })
    }
     catch (error) {
        res.status(400).json({
            status: "error",
            massage: "Get Booking by email Error.",
            error: error.message
        })
    }
}
