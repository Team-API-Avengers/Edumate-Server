const { createCommentServices, getAcommentServices } = require("../services/comment.services");


exports.createComment = async (req, res, next) => {
    try {
        // save or create a new createBlog
        const result = await createCommentServices(req.body);

        res.status(200).json({
            status: 'success',
            massage: "comment inserted Successfully!",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "comment inserted Error",
            error: error.message
        })
    }
};


// get a specific booking info ------------------------
exports.getAcomment = async (req, res, next) => {
    try {
        const results = await getAcommentServices(req.params.id);
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
