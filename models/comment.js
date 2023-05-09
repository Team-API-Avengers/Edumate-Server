const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    authorName: {
        type: String,
        required: true
    },
    postId: {
        type: String,
        required: true
    },
    authorEmail: {
        type: String,
        required: true
    },

    authorImage: {
        type: String,
        required: true
    },
    studentName: {
        type: String,
        required: true
    },
    studentEmail: {
        type: String,
        required: true
    },
    studentImage: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true

    },
    date: {
        type: Date,
        default: Date.now
    }
})

const commentModal = mongoose.model("commentModal", commentSchema)

// exports the commentModal
module.exports = commentModal;
