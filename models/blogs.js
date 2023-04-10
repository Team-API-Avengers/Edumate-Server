const mongoose = require("mongoose");


const blogSchema = new mongoose.Schema({
    authorName: {
        type: String,
        trim: true, // without spaces
    },
    authorEmail: {
        type: String,
        trim: true, // without spaces
    },
    authorRole: {
        type: String,
    },
    authorImage: {
        type: String,
    },
    title: {
        type: String,

    },
    category: {
        type: String,

    },
    details: {
        type: String,
    },
    blogImage: {
        type: String,
    }

}, {
    timestamps: true,
});



const BlogSchema = mongoose.model('Blog', blogSchema)

// export  BlogSchema
module.exports = BlogSchema;

