const mongoose = require("mongoose");

const assesmentSchema = new mongoose.Schema({
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


const assesment = mongoose.model('assesment', assesmentSchema)
module.exports = assesment;