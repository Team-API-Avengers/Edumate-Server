const Test = require("../models/test");

// get all test questions
exports.getAllQuestionsService = async () => {
    const result = await Test.find({});
    return result;
};







