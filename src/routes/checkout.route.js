// //LocalMarket_Backend/LocalMarketBackend/LocalMarket_Backend/src/routes/checkout.route.js

const express = require('express');
const router = express.Router();
const checkoutController = require('../api/v1/checkout/checkout.controller');

// Create checkout entry in the DB
router.post('/', checkoutController.createCheckout);

module.exports = router;

