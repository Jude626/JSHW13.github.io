const mysql = require('mysql');
require("dotenv").config();

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
        host:'localhost',
        port: 8080,
        user:'root',
        password: process.env.PASS,
        database:'burgers_db'
});
};

connection.connect(function(err){
    if(err) throw err;
    console.log("Success! Connection registered as id: " + connection.threadId);
});

module.exports = connection;