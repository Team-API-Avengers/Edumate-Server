const Fees = require("../models/fees");
const Booking = require("../models/booking");

exports.createAPaymentServices = async (id) => {
    const result = await Booking.findById({ _id: id });
    return result;
};


// success payment success -------------
exports.successPaymentServices = async (transactionId) => {
    const result = await Fees.updateOne({ transactionId }, { $set: { paymentStatus: true, paidAt: new Date() } });
    return result;
}

// failure payment services -------------

exports.failurePaymentServices = async (transactionId) => {
    console.log(typeof transactionId);
    const result = await Fees.deleteOne({ transactionId })
    return result;
}



// payment success notification -------------
exports.notificationPaymentServices = async (transactionId) => {
    const result = await Fees.findOne({ transactionId: transactionId });
    return result;
}

