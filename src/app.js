const express = require('express');
const app = express();
const userRoute = require('./routes/user.route');
const bussinessRoute = require('./routes/bussiness.route');
const adminRoute = require('./routes/admin.route');
const categores = require('./routes/categories');
const products = require('./routes/products');
const checkoutRoute = require('./routes/checkout.routes'); // ✅ NEW
const db = require('./db/db.config');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const fileupload = require('express-fileupload');
const dotenv = require('dotenv').config();

const corsOptions = {
  origin: "http://localhost:3001"
};

app.use(fileupload({
  useTempFiles: true
}));

app.use(cors(corsOptions));

const seedAdmin = async () => {
  const [admin] = await db.query('SELECT * FROM user WHERE userrole=?', ['admin']);
  if (admin.length === 0) {
    try {
      const hashpassword = await bcrypt.hash('admin', 10);
      await db.query('INSERT INTO user (accountname,email,accountpassword,userrole) VALUES (?,?,?,?)', ['admin', 'admin@gmail.com', hashpassword, 'admin']);
      console.log('Admin seeded');
    } catch (err) {
      console.log(err);
    }
  }
};
seedAdmin();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/user', userRoute);
app.use(categores);
app.use(products);
app.use('/bussiness', bussinessRoute);
app.use('/admin', adminRoute);
app.use('/checkout', checkoutRoute); // ✅ NEW

module.exports = app;
