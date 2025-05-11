// //LocalMarket_Backend/LocalMarketBackend/LocalMarket_Backend/src/db/db.config.js

const mysql = require('mysql2/promise');
require('dotenv').config();

const mysqlPool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
      
});

module.exports = mysqlPool;
