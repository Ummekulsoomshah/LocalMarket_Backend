// //LocalMarket_Backend/LocalMarketBackend/LocalMarket_Backend/src/app.js
// const express = require('express');
// const app = express();
// const dotenv = require('dotenv').config();
// const userRoute = require('./routes/user.route');
// const businessRoutes = require('./src/routes/business.route');

// const adminRoute = require('./routes/admin.route');
// const categories = require('./routes/categories');
// const products = require('./routes/products');
// const cart = require('./routes/cart');
// const checkoutRoutes = require('./routes/checkout.route');
// const payfastRoutes = require('./routes/payfast.route');
// const jwt = require('jsonwebtoken');
// const db = require('./db/db.config');
// const bcrypt = require('bcrypt');
// const cors = require('cors');
// const fileupload = require('express-fileupload');




// const shopRoutes = require('./routes/shop.route');

// // const secretKey = process.env.SECRET_KEY;
// // console.log(secretKey);
// // Setup CORS
// const corsOptions = {
//   origin: "http://localhost:3000", // change if needed
// };
// app.use(cors(corsOptions));

// // Parse JSON & files
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(fileupload({ useTempFiles: true }));
// // Seed admin account
// const seedAdmin = async () => {
//   const [admin] = await db.query('SELECT * FROM user WHERE userrole=?', ['admin']);
//   if (admin.length === 0) {
//     try {
//       const hashpassword = await bcrypt.hash('admin', 10);
      
//       // Use the corrected SQL query to insert data into the 'password' column
//       await db.query(
//         'INSERT INTO user (accountname, email, password, userrole) VALUES (?, ?, ?, ?)',
//         ['admin', 'admin@gmail.com', hashpassword, 'admin']
//       );
//       console.log('Admin seeded');
//     } catch (err) {
//       console.log(err);
//     }
//   }
// };

// seedAdmin();
// // Routes
// app.use('/user', userRoute);

// app.use('/admin', adminRoute);
// app.use(categories);
// app.use('/business', businessRoutes);
// app.use(products);
// app.use('/api/checkout', checkoutRoutes);  // POST /api/checkout
// app.use('/api/payfast', payfastRoutes);    // POST /api/payfast
// app.use('/api/items', shopRoutes);
// module.exports = app;

const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const userRoute = require('./routes/user.route');
const businessRoutes = require('./routes/business.route'); // Correct import
const adminRoute = require('./routes/admin.route');
const categories = require('./routes/categories');
const products = require('./routes/products');
const cart = require('./routes/cart');
const checkoutRoutes = require('./routes/checkout.route');
const payfastRoutes = require('./routes/payfast.route');
const jwt = require('jsonwebtoken');
const db = require('./db/db.config');
const bcrypt = require('bcrypt');
const cors = require('cors');
const fileupload = require('express-fileupload');

const shopRoutes = require('./routes/shop.route');

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
app.use(products);
app.use('/api/checkout', checkoutRoutes);
app.use('/api/payfast', payfastRoutes);
app.use('/api/items', shopRoutes);

module.exports = app;
