
const express = require('express');
const router = express.Router();
const checkout = require('../api/v1/cart/checkout');

router.post('/checkout', checkout);

module.exports = router;

