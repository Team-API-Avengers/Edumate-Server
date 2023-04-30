const SSLCommerzPayment = require('sslcommerz-lts')

// save a feedback -------------------------------
exports.createApayment =  async (req, res) => {

    try{
        /** 
    * Create ssl session request 
    */
  
    const data = {
        total_amount: 100,
        currency: 'BDT',
        tran_id: 'REF123',
        success_url: `${process.env.ROOT}/ssl-payment-success`,
        fail_url: `${process.env.ROOT}/ssl-payment-failure`,
        cancel_url: `${process.env.ROOT}/ssl-payment-cancel`,
        ipn_url : `${process.env.ROOT}/ssl-payment-ipn`,
        shipping_method: 'No',
        product_name: 'Computer.',
        product_category: 'Electronic',
        product_profile: 'general',
        cus_name: 'Customer Name',
        cus_email: 'cust@yahoo.com',
        cus_add1: 'Dhaka',
        cus_add2: 'Dhaka',
        cus_city: 'Dhaka',
        cus_state: 'Dhaka',
        cus_postcode: '1000',
        cus_country: 'Bangladesh',
        cus_phone: '01711111111',
        cus_fax: '01711111111',
        multi_card_name: 'mastercard',
        value_a: 'ref001_A',
        value_b: 'ref002_B',
        value_c: 'ref003_C',
        value_d: 'ref004_D',
        ipn_url: `${process.env.ROOT}/ssl-payment-notification`,
      };
      console.log(req.body)
    
      const sslcommerz = new SSLCommerzPayment(process.env.STORE_ID, process.env.STORE_PASS, false) //true for live default false for sandbox
      sslcommerz.init(data).then(data => {
    
        //process the response that got from sslcommerz 
        //https://developer.sslcommerz.com/doc/v4/#returned-parameters
    
        if (data?.GatewayPageURL) {
          return res.status(200).redirect(data?.GatewayPageURL);
        }
        else {
          return res.status(400).json({
            message: "Session was not successful"
          });
        }
        // let GatewayPageURL = apiResponse.GatewayPageURL
        // res.redirect(GatewayPageURL)
        // console.log('Redirecting to: ', GatewayPageURL)
      })
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
            massage: "payment is no success",
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
// cancle success ----------------------------
exports.canclePayment = async (req, res, next) => {
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
