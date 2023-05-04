const SSLCommerzPayment = require('sslcommerz-lts')
const dotenv = require("dotenv").config();
const Booking = require("../models/booking")




// save a feedback -------------------------------
exports.createAPyment = async (req, res) => {

    try {
        const paymentInfo = req.body;

        const id = paymentInfo.id;

        const findTutorInfo = await Booking.findById({ _id: id });
        const transactionId = findTutorInfo.id.toString();



        const data = {
            total_amount: paymentInfo.teacherFee,
            currency: 'BDT',
            tran_id: transactionId,
            success_url: `${process.env.ROOT}/ssl-payment-success`,
            fail_url: `${process.env.ROOT}/ssl-payment-failure`,
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

        console.log(data);



        const sslcz = new SSLCommerzPayment(process.env.STORE_ID, process.env.STORE_PASS, false)
        sslcz.init(data).then((apiResponse) => {
            // Redirect the user to payment gateway
            let GatewayPageURL = apiResponse.GatewayPageURL;
            console.log(apiResponse);
           
            
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
        return res.status(200).json(
            {
                data: req.body,
                message: 'Payment success'
            }
        );
    }
    catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "payment is not success",
            error: error.message
        })
    }
};
// failer success ----------------------------
exports.failurePayment = async (req, res, next) => {
    try {
        return res.status(200).json(
            {
                data: req.body,
                message: 'Payment failed'
            }
        );
    }
    catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "payment is failed",
            error: error.message
        })
    }
};
// cancle success ----------------------------
exports.canclePayment = async (req, res, next) => {
    try {
        return res.status(200).json(
            {
                data: req.body,
                message: 'Payment canceled'
            }
        );
    }
    catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "payment is canceled",
            error: error.message
        })
    }
};
// notification ----------------------------
exports.notificationPayment = async (req, res, next) => {
    try {
        return res.status(200).json(
            {
                data: req.body,
                message: 'Payment success'
            }
        );
    }
    catch (error) {
        res.status(400).json({
            status: 'error',
            massage: "payment is failed",
            error: error.message
        })
    }
};
