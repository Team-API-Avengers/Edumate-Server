const mongoose = require("mongoose");

const tutorTestSchema = new mongoose.Schema({
    tutorName : {
        type: String,
        required: true,
    },
    tutorEmail : {
        type: String,
        required: true
    },
    tutorImage : {
        type: Array,
        required: true
    },
    score : {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});


const tutorTest = mongoose.model('tutorTest', tutorTestSchema)
module.exports = tutorTest;