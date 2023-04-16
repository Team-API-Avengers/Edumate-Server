const mongoose = require("mongoose");



const bookingSchema = new mongoose.Schema({
    teachername: {
        type: String,
        trim: true, // without spaces
        minLenght: [3, "Name must be at least 3 characters."],
        maxLenght: [20, "Name is too long."],
    },
    teacheremail: {
        type: String,
        required: [true, "Please provide a email address."],
        trim: true, // without spaces
    },
    teacherlocation: {
        type: String,
        required: true,
        trim: true, // without spaces,
    },
    teacherphone: {
        type: Number,
        required: true,
    },
    teacherimage: {
        type: String,
        required: true,
    },
    teacherexperience: {
        type: Number,
        required: true,
    },
    teacherbackground: {
        type: String,
        required: true,
        enum: {
            values: ["Science", "Arts", "Commerce"],
            massage: "background can't be others."
        }
    },
    teacherfee: {
        type: String,
        required: true
    },
    studentEmail: {
        type: String,
        required : true
    },
    studentName:{
        type: String,
        required : true
    },
    studentImage:{
        type: String,
        required: true,
    }
},{
    timestamps: true
});


const Booking = mongoose.model('Booking', bookingSchema)

// export  Booking
module.exports = Booking;