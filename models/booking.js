const mongoose = require("mongoose");



const bookingSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true, // without spaces
        minLenght: [3, "Name must be at least 3 characters."],
        maxLenght: [20, "Name is too long."],
    },
    email: {
        type: String,
        required: [true, "Please provide a email address."],
        trim: true, // without spaces
    },
    location: {
        type: String,
        required: true,
        trim: true, // without spaces,
    },
    phone: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    experience: {
        type: Number,
        required: true,
    },
    background: {
        type: String,
        required: true,
        enum: {
            values: ["Science", "Arts", "Commerce"],
            massage: "background can't be others."
        }
    },
    fee: {
        type: String,
        required: true
    }
});


const Booking = mongoose.model('Booking', bookingSchema)

// export  Booking
module.exports = Booking;