const mysql = require('mysql2/promise');
require('dotenv').config(); // Load environment variables from .env file

const mysqlPool=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'kulsoommysql',
    database:'localmarket'
})

module.exports=mysqlPool

