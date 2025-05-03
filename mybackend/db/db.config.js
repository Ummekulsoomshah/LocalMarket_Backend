const mysql=require('mysql2/promise')

const mysqlPool=mysql.createPool({
    host:'localhost',
    user:'root',
    password:'pakistan786',
    database:'localmarket'
})

module.exports=mysqlPool

