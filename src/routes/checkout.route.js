// routes/checkout.js
const express = require('express');
const pool = require('../db');  // Import the database connection
const router = express.Router();

// PayFast Payment handling function (mocked for this example)
const payFastPayment = async (amount, email, first_name, last_name) => {
  // Mock URL generation for PayFast Payment
  return `https://payfast.com/payment?amount=${amount}&email=${email}&first_name=${first_name}&last_name=${last_name}`;
};

// POST route for handling checkout
router.post('/', async (req, res) => {
  try {
    const {
      amount,
      first_name,
      last_name,
      email,
      phone,
      street,
      city,
      state,
      zip,
    } = req.body;

    console.log('Received data:', req.body);

    // Validate that all required fields are present
    if (
      !amount ||
      !first_name ||
      !last_name ||
      !email ||
      !phone ||
      !street ||
      !city ||
      !state ||
      !zip
    ) {
      console.log('Missing required fields');
      return res.status(400).json({ message: 'Missing required fields.' });
    }

    // Insert data into the checkout table
    const [result] = await pool.execute(
      `INSERT INTO checkout 
        (first_name, last_name, email, phone, street, city, state, zip, amount, payment_status)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        first_name,
        last_name,
        email,
        phone,
        street,
        city,
        state,
        zip,
        amount,
        'Pending',  // Status can be "Pending" initially
      ]
    );

    console.log('Inserted checkout ID:', result.insertId);

    // Generate payment URL
    const paymentUrl = await payFastPayment(amount, email, first_name, last_name);

    // Return success response with payment URL and checkout ID
    return res.status(200).json({
      message: 'Checkout initiated successfully.',
      checkout_id: result.insertId,
      paymentUrl,
    });
  } catch (error) {
    console.error('Checkout error:', error);
    return res.status(500).json({ message: 'Checkout failed', error });
  }
});

module.exports = router;
