const Assesment = require("../models/assesment")

// create tutortest service ------------------
exports.createAssesmentService = async (data) => {
    const result = await Assesment.create(data);
    return result;
};

// get a tutorTest by email -----------
exports.getAssesmentServices = async (email) => {
    const result = await Assesment.find({ tutorEmail: email });
    return result
};
