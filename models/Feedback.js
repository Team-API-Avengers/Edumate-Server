const mongoose = require('mongoose');

const feedBackSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please provide a name."],
        trim: true, // without spaces
        minLenght: [3, "Name must be at least 3 characters."],
        maxLenght: [20, "Name is too long."],
    },

    email: {
        type: String,
        required: [true, "Please provide a email address."],
        trim: true, // without spaces
        
        validate: {
            validator: () => {
                Promise.resolve(false)
            },
            message: 'Email validation failed'
        }
    },

    message: {
        type : String,
        required: [true, "Message field must be required"]
    }
})

const feedBackModel = mongoose.model("feedBackModel",feedBackSchema)

module.exports = feedBackModel;