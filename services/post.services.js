const Post = require("../models/post");

// create a new post object ---
exports.createAPostServices = async (req, res, next) => {
    const result = await Post.create(req.body);
    return result;
}








