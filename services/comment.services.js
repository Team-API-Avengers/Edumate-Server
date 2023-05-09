const comment = require("../models/comment")

// create a new comment  ------------------------
exports.createCommentServices = async (data) => {
    const result = await comment.create(data);
    return result;
};