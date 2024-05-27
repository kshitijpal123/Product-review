const mysql = require('mysql')

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'kshitijsql',
    database : 'reviews'
  });
   
  connection.connect((err)=>{
    if (err) {
        console.error("database not connected");
    }
    console.log("Database is connected");
  });

module.exports = connection