const mongoose = require("mongoose");


const paymentSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    teacherName: {
        type: String,
        required: true
    },
    teacherEmail: {
        type: String,
        required: true
    },
    teacherPhone: {
        type: String,
        required: true
    },
    teacherBackground: {
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
    teacherFee: {
        type: Number,
        required: true
    },
    teacherLocation: {
        type: String,
        required: true
    },
    transactionId: {
        type: String,
        required: true
    },
    paymentStatus: {
        type: Boolean,
        required: true
    }
}, {
    timestamps: true
});



const Fees = mongoose.model('Fees', paymentSchema)

// export  Booking
module.exports = Fees;