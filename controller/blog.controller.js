const { createBlogService, getAllBlogService, updateBlogService, deleteBlogService, getASingleBlogService } = require("../services/blog.services");


exports.createBlog = async (req, res, next) => {
    try {
        // save or create a new createBlog
        const result = await createBlogService(req.body);

        res.status(200).json({
            status: 'success',
            massage: "Data inserted Successfully!",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "Data inserted Error",
            error: error.message
        })
    }
};


// get all blog posts ---
exports.getAllBlog = async (req, res, next) => {
    try {
        // save or create a new createBlog
        const result = await getAllBlogService();

        res.status(200).json({
            status: 'success',
            massage: "Data inserted Successfully!",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "Data inserted Error",
            error: error.message
        })
    }
};


// get update blog --
exports.updateBlog = async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await updateBlogService(id, req.body);

        res.status(200).json({
            status: 'success',
            massage: "Data inserted Successfully!",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "Data inserted Error",
            error: error.message
        })
    }

};


// delete blog --
exports.deleteBlog = async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await deleteBlogService(id);

        res.status(200).json({
            status: 'success',
            massage: "Data inserted Successfully!",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "Data inserted Error",
            error: error.message
        })
    }

};


// get a single blog ----
exports.getASingleBlog = async (req, res, next) => {
    try {
        const id = req.params.id;
        const result = await getASingleBlogService(id);

        res.status(200).json({
            status: 'success',
            massage: "Data inserted Successfully!",
            data: result
        })
    } catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "Data inserted Error",
            error: error.message
        })
    }

};



