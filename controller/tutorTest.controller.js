const { createTutorTestService, getTutorTestServices } = require("../services/tutorTest.services");


// create a new createTutor
exports.createTutorTest = async (req, res, next) => {
    try {
        // save or create a new Tutor
        const result = await createTutorTestService(req.body);

        res.status(200).json({
            status: 'success',
            massage: "Data inserted Successfully!",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "Data inserted Error",
            error: error.message
        })
    }
};

// getBookingStudent api-----------
exports.getTutorTest=async(req, res, next)=>{
    try {
        const email = req.query.email 
        const result = await getTutorTestServices(email)
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