const mysql = require('mysql2/promise');
require('dotenv').config(); // Load environment variables from .env file
// Log environment variables to verify
console.log({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
const mysqlPool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME // Correct usage of DB_NAME
});

module.exports = mysqlPool;