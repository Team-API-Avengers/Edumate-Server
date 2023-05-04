const express = require("express");
const router = express.Router();
const paymentController = require("../../controller/payment.controller")

router.route("/ssl-request")
    .post(paymentController.createAPyment)

//   payment successs ------------------------
router.route("/ssl-payment-success")
    .post(paymentController.successPayment)


// //   payment failure ------------------------------
router.route("/ssl-payment-failure")
    .post(paymentController.failurePayment)

// //   cancel payment -------------------------------
router.route("/ssl-payment-cancel")
    .post(paymentController.canclePayment)

//    // payment ipn -------------------------
router.route("/ssl-payment-ipn")
    .post(paymentController.notificationPayment)

module.exports = router;