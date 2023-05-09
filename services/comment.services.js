const comment = require("../models/comment")

// create a new comment  ------------------------
exports.createCommentServices = async (data) => {
    const result = await comment.create(data);
    return result;
};

// get a booking info  -----
exports.getAcommentServices = async (id) => {
    const result = await comment.findOne({ _id: id });
    return result;
};
