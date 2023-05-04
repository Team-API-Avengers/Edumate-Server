const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
        enum: {
            values: ["Arts", "Science", "Commerce"],
            massage: "Subject can't be others."
        }
    },
    question: {
        type: String,
        required: true
    },
    options: {
        type: Array,
        required: true
    },
    answer: {
        type: String,
        required: true
    }
});


const test = mongoose.model('test', testSchema)
module.exports = test;