const test = require("../models/test");

// get all test questions
exports.getAllQuestionsService = async () => {
    const result = await test.find({});
    return result;
};



// exports.postAllQuestionsService = async (data) => {
//     const result = await test.create(data);
//     return result;
// };







