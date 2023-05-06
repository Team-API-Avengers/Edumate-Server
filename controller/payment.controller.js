const SSLCommerzPayment = require('sslcommerz-lts');
const dotenv = require("dotenv").config();
const Booking = require("../models/booking");
const Fees = require("../models/fees");
const { createAPaymentServices, successPaymentServices, failurePaymentServices, notificationPaymentServices } = require('../services/fees.services');



// save a feedback -------------------------------
exports.createAPayment = async (req, res) => {

    try {
        const paymentInfo = req.body;
        const id = paymentInfo.id
        const findTutorInfo = await createAPaymentServices(id);

        const transactionId = findTutorInfo.id.toString();

        const data = {
            total_amount: paymentInfo.teacherFee,
            currency: 'BDT',
            tran_id: transactionId,
            success_url: `${process.env.ROOT}/ssl-payment-success?transactionId=${transactionId}`,
            fail_url: `${process.env.ROOT}/ssl-payment-failure?transactionId=${transactionId}`,
            cancel_url: `${process.env.ROOT}/ssl-payment-cancel`,
            ipn_url: `${process.env.ROOT}/ssl-payment-ipn`,
            shipping_method: 'No',
            product_name: 'My Tutor',
            product_category: paymentInfo.teacherBackground,
            product_profile: paymentInfo.teacherName,
            cus_name: paymentInfo.studentName,
            cus_email: paymentInfo.studentEmail,
            cus_add1: paymentInfo.teacherLocation,
            cus_add2: "Testing",
            cus_city: 'Dhaka',
            cus_state: 'Dhaka',
            cus_postcode: '1000',
            cus_country: 'Bangladesh',
            cus_phone: '01711111111',
            cus_fax: paymentInfo.teacherPhone,
            multi_card_name: paymentInfo.studentName,
            value_a: 'ref001_A',
            value_b: 'ref002_B',
            value_c: 'ref003_C',
            value_d: 'ref004_D',
            ipn_url: `${process.env.ROOT}/ssl-payment-notification`,
        };

        const sslcz = new SSLCommerzPayment(process.env.STORE_ID, process.env.STORE_PASS, false)
        sslcz.init(data).then(async (apiResponse) => {
            // Redirect the user to payment gateway
            let GatewayPageURL = apiResponse.GatewayPageURL;
            // console.log(apiResponse);

            const paymentDetails = await Fees.create({
                ...paymentInfo,
                transactionId,
                paymentStatus: false,
            });

            res.send({ url: GatewayPageURL });
        });
    }
    catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "Data inserted Error",
            error: error.message
        })
    }
}


// payment success ----------------------------
exports.successPayment = async (req, res, next) => {
    try {

        const { transactionId } = req.query;

        if (!transactionId) {
            return res.redirect(`${process.env.CLIENT_URL}/payment/fail`);
        }
        const result = await successPaymentServices(transactionId);

        if (result.modifiedCount > 0) {
            return res.redirect(`${process.env.CLIENT_URL}/dashboard/payment/success?transactionId=${transactionId}`);
        }

        return res.status(200).json({
            status: 'success',
            massage: "Success Status Successfully Updated",
            data: result
        })
    }
    catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "Success Status Successfully Not Updated",
            error: error.message
        })
    }
};


// failure success ----------------------------
exports.failurePayment = async (req, res, next) => {
    try {
        const { transactionId } = req.query;

        if (!transactionId) {
            return res.redirect(`${process.env.CLIENT_URL}/dashboard/payment/fail`);
        }

        const result = await failurePaymentServices(transactionId);

        // const result = await orderCollection.deleteOne({ transactionId });

        if (result.deletedCount) {
            res.redirect(`${process.env.CLIENT_URL}/dashboard/payment/fail`);
        }


        return res.status(200).json(
            {
                data: req.body,
                message: 'Payment Failed Deleted Successfully.',
                result: result
            }
        );
    }
    catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "Payment Failed Not Deleted Successfully",
            error: error.message
        })
    }
};


// cancel success ----------------------------
exports.cancelPayment = async (req, res, next) => {
    try {
        const { transactionId } = req.query;

        if (!transactionId) {
            return res.redirect(`${process.env.CLIENT_URL}/dashboard/my-Teachers`);
        }

        return res.status(200).json(
            {
                data: req.body,
                message: 'Payment Cancel Successfully.',
                result: result
            }
        );
    }
    catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "Payment Cancel Successfully Error",
            error: error.message
        })
    }
};


// notification ----------------------------
exports.notificationPayment = async (req, res, next) => {
    try {
        const { transactionId } = req.params;
        const result = await notificationPaymentServices(transactionId);

        console.log(result);
        return res.status(200).json(
            {
                data: req.body,
                message: 'Payment Successful Notification.',
                result: result
            }
        );
    } catch (error) {
        return res.status(400).json(
            {
                data: req.body,
                message: 'Payment Successful Notification Error.',
                result: result
            }
        );
    }

};
