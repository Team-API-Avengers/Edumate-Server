const Post = require("../models/post");
const { createAPostServices, getSubmittedDataServices } = require("../services/post.services");

// create a new post for Student -----
exports.createAPost = async (req, res, next) => {
    try {
        const result = await createAPostServices(req.body);
        res.status(200).json({
            status: 'success',
            massage: "Create a Post Successfully!",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "Create a Post Error!",
            error: error.message
        })
    }
};



// get all posts for Student -----
exports.getSubmittedData = async (req, res, next) => {
    try {
        const result = await getSubmittedDataServices();

        res.status(200).json({
            status: 'success',
            massage: "Get All Posts Successfully!",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "Get All Posts Error!",
            error: error.message
        })
    }
};








