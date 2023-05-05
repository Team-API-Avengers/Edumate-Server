const Post = require("../models/post");

// create a new post object ---
exports.createAPostServices = async (data) => {
    const result = await Post.create(data);
    return result;
};


// get all posts ---
exports.getSubmittedDataServices = async () => {
    const result = await Post.find({});
    return result;
}



