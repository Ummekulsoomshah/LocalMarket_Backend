// //LocalMarket_Backend/LocalMarketBackend/LocalMarket_Backend/src/app.js

const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const userRoute = require('./routes/user.route');
const businessRoutes = require('./routes/business.route'); // Correct import
const adminRoute = require('./routes/admin.route');
const categories = require('./routes/categories');

const cart = require('./routes/cart');
const checkoutRoutes = require('./routes/checkout.route');
const payfastRoutes = require('./routes/payfast.route');
const jwt = require('jsonwebtoken');
const db = require('./db/db.config');
const bcrypt = require('bcrypt');
const cors = require('cors');
const fileupload = require('express-fileupload');
const path = require('path');
const shopRoutes = require('./routes/shop.route');
 
const productRoutes = require('./routes/products'); 

// Setup CORS
const corsOptions = {
  origin: "http://localhost:3000", // change if needed
};
app.use(cors(corsOptions));

// Parse JSON & files
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileupload({ useTempFiles: true }));

// Seed admin account
const seedAdmin = async () => {
  const [admin] = await db.query('SELECT * FROM user WHERE userrole=?', ['admin']);
  if (admin.length === 0) {
    try {
      const hashpassword = await bcrypt.hash('admin', 10);
      await db.query(
        'INSERT INTO user (accountname, email, password, userrole) VALUES (?, ?, ?, ?)',
        ['admin', 'admin@gmail.com', hashpassword, 'admin']
      );
      console.log('Admin seeded');
    } catch (err) {
      console.log(err);
    }
  }
};

seedAdmin();

// Routes


app.use('/user', userRoute);
app.use('/admin', adminRoute);
app.use(categories);
app.use('/business', businessRoutes);  // Using the correct route
app.use('/api/products', productRoutes);
app.use('/api/checkout', checkoutRoutes);
app.use('/api/payfast', payfastRoutes);
app.use('/api/items', shopRoutes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
module.exports = app;
