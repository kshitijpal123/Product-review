const express = require('express')
const mysql = require('mysql2')
const app = express()
const router = require('./route/route')
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.listen(3000, ()=> {
    console.log("server is running on port 3000");
})

app.use(router);

// var connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : 'kshitijsql',
//     database : 'reviews'
//   });
   
//   connection.connect();
