const express = require('express');
const router = express.Router();
const checkoutController = require('../api/v1/checkout/checkout.controller');

router.post('/', checkoutController.createCheckout); // Save checkout data

module.exports = router;
