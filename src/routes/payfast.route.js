


const express = require('express');
const router = express.Router();
const payfastController = require('../api/v1/checkout/payfast.controller');

router.post('/', payfastController.createPaymentLink); // Create payment link
router.post('/notify', payfastController.processPaymentNotification); // Handle PayFast notification

module.exports = router;
