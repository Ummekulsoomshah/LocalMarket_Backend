require('dotenv').config(); // Ensure .env loads before using environment variables

const express = require('express');
const path = require('path');
const cors = require('cors');
const fileupload = require('express-fileupload');
const bcrypt = require('bcrypt');
const db = require('./db/db.config');



// Route imports
const userRoute = require('./routes/user.route');
const bussinessRoute = require('./routes/bussiness.route');
const adminRoute = require('./routes/admin.route');
const categories = require('./routes/categories');
const products = require('./routes/products');
const checkoutRoute = require('./routes/checkout.route');
const payfastRoutes = require('./routes/payfast.route');

const app = express();

// CORS Options (for React frontend)
const corsOptions = {
  origin: "http://localhost:3000", // ✅ Usually your React app runs here
  credentials: true,
};

// Middleware setup
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileupload({ useTempFiles: true }));




// Admin Seeder
const seedAdmin = async () => {
  try {
    const [admin] = await db.query('SELECT * FROM user WHERE userrole = ?', ['admin']);
    if (admin.length === 0) {
      const hashpassword = await bcrypt.hash('admin', 10);
      await db.query(
        'INSERT INTO user (accountname, email, accountpassword, userrole) VALUES (?, ?, ?, ?)',
        ['admin', 'admin@gmail.com', hashpassword, 'admin']
      );
      console.log('✅ Admin user seeded');
    }
  } catch (err) {
    console.error('❌ Admin seed error:', err);
  }
};
seedAdmin();

// Routes setup
app.use('/user', userRoute);
app.use('/bussiness', bussinessRoute);
app.use('/admin', adminRoute);
app.use('/categories', categories);
app.use('/products', products);
app.use('/api/checkout', checkoutRoute); // JSON checkout
app.use('/api/payfast', payfastRoutes);  // PayFast payment link

// Serving the React app (for production)
if (process.env.NODE_ENV === 'production') {
  // Serve static files from the React build folder
  app.use(express.static(path.join(__dirname, 'build')));

  // For any route that doesn't match an API route, send the React app
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
}

module.exports = app;
