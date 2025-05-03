

const express = require('express');
const app = express();
const cors = require('cors');
const checkoutRoute = require('./routes/checkout.routes'); // ✅ ONLY payment related

// Enable CORS
const corsOptions = {
  origin: "http://localhost:3001"
};
app.use(cors(corsOptions));

// Parse incoming requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use only the checkout route
app.use('/checkout', checkoutRoute);

module.exports = app;
