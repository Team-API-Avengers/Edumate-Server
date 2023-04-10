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

