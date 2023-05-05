const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    authorName: {
        type: String,
        required: true
    },
    authorRole: {
        type: String,
        required: true
    },
    authorImage: {
        type: String,
        required: true
    },
    authorEmail: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }

})

const Post = mongoose.model('Post', postSchema)

// export  Post
module.exports = Post;
