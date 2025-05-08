// /routes/shop.route.js
const express = require('express');
const router = express.Router();
const shopController = require('../api/v1/shop/shop.controller');

// Define the route to get shop items
router.get('/', shopController.getShopItems);

module.exports = router;
