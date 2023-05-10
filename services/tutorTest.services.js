const TutorTest = require("../models/tutorTest")


// create tutortest service ------------------
exports.createTutorTestService = async (data) => {
    const result = await TutorTest.create(data);
    return result;
};

// get a tutorTest by email -----------
exports.getTutorTestServices = async (email) => {
    const result = await TutorTest.find({ tutorEmail: email });
    return result
};
