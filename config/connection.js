const mysql = require('mysql');
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'ENTERLATER!!!',
    database:'burgers_db'
})

connection.connect(function(err){
    if(err) throw err;
    console.log("Success! Connection registered as id: " + connection.threadId);
});

module.exports = connection;