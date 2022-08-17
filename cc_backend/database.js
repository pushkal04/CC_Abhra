const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '7O7O1@me',
    database: 'abhroCC'
});
connection.connect(function(err) {
    if (err) throw err;
    console.log('Database is connected successfully !');
  });

module.exports = connection;