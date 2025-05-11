// // //LocalMarket_Backend/LocalMarketBackend/LocalMarket_Backend/src/routes/payfast.route.js
// const express = require('express');
// const router = express.Router();
// const payfastController = require('../api/v1/checkout/payfast.controller');

// router.post('/', payfastController.createPaymentLink); // Create payment link
// router.post('/notify', payfastController.processPaymentNotification); // Handle PayFast notification

const express = require('express');
const router = express.Router();
const payfastController = require('../api/v1/checkout/payfast.controller');

// Create PayFast payment link
router.post('/', payfastController.createPaymentLink);

// Handle PayFast notification after payment
router.post('/notify', payfastController.processPaymentNotification);

module.exports = router;
