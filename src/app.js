const express = require('express');
const app = express();
const userRoute = require('./routes/user.route');
const bussinessRoute = require('./routes/bussiness.route');
const adminRoute = require('./routes/admin.route');
const categories = require('./routes/categories');
const products = require('./routes/products');
const cart = require('./routes/cart');
const checkoutRoutes = require('./routes/checkout.route');
const payfastRoutes = require('./routes/payfast.route');

const db = require('./db/db.config');
const bcrypt = require('bcrypt');
const cors = require('cors');
const fileupload = require('express-fileupload');
const dotenv = require('dotenv').config();

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
        'INSERT INTO user (accountname,email,accountpassword,userrole) VALUES (?,?,?,?)',
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
app.use('/bussiness', bussinessRoute);
app.use('/admin', adminRoute);
app.use(categories);
app.use(products);
app.use('/api/checkout', checkoutRoutes);  // POST /api/checkout
app.use('/api/payfast', payfastRoutes);    // POST /api/payfast

module.exports = app;
