const express = require("express");
const router = express.Router();
const paymentController = require("../../controller/payment.controller")

router.route("/ssl-request")
    .post(paymentController.createAPayment)

//   payment success -----------------------------
router.route("/ssl-payment-success")
    .post(paymentController.successPayment)


//   payment failure ------------------------------
router.route("/ssl-payment-failure")
    .post(paymentController.failurePayment)

//   cancel payment -------------------------------
router.route("/ssl-payment-cancel")
    .post(paymentController.cancelPayment)


//  payment notification --------------------------
router.route("/ssl-payment-notification/:transactionId")
    .get(paymentController.notificationPayment)



module.exports = router;