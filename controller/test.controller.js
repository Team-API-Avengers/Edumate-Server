const { getAllQuestionsService } = require("../services/test.services");

// get all questions ------
exports.getAllQuestions = async (req, res, next) => {
    try {
        // get all questions
        const result = await getAllQuestionsService();

        res.status(200).json({
            status: 'success',
            massage: "get questions Successfully!",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "get questions Error",
            error: error.message
        })
    }
};


// exports.postAllQuestions = async (req, res, next) => {
//     try {
//         // get all questions
//         const result = await postAllQuestionsService(req.body);

//         res.status(200).json({
//             status: 'success',
//             massage: "get questions Successfully!",
//             data: result
//         })
//     } catch (error) {
//         res.status(400).json({
//             status: 'error',
//             massage: "get questions Error",
//             error: error.message
//         })
//     }
// };