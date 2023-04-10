const BlogSchema = require("../models/blogs");


// create a new blog -----
exports.createBlogService = async (data) => {
    const result = await BlogSchema.create(data);
    return result
};


// get all blog posts -----

exports.getAllBlogService = async () => {
    const result = await BlogSchema.find({});
    return result
};


// update a blog post ----- 
exports.updateBlogService = async (id, data) => {
    const result = await BlogSchema.updateOne({ _id: id }, { $set: data })
    return result
}

// delete a blog post ----
exports.deleteBlogService = async (id) => {
    const result = await BlogSchema.deleteOne({ _id: id });
    return result;
}


// get a single blog post ---
exports.getASingleBlogService = async (id) => {
    const result = await BlogSchema.findOne({ _id: id });
    return result;
}