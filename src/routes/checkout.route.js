const express = require('express');
const router = express.Router();
const checkoutController = require('../api/v1/cart/checkout');

router.post('/', checkoutController.createCheckout); // Save checkout data

module.exports = router;
