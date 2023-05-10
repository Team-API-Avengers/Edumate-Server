const { createAssesmentService, getAssesmentServices } = require("../services/assesment.services");

// create a new createTutor
exports.createAssesment = async (req, res, next) => {
    try {
        // save or create a new Tutor
        const result = await createAssesmentService(req.body);

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

// get assesment api-----------
exports.getAssesment=async(req, res, next)=>{
    try {
        const email = req.query.email 
        const result = await getAssesmentServices(email)
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