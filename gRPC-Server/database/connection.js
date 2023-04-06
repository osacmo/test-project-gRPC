const mysql = require('mysql');
const connection = mysql.createConnection({
    //host: 'example.org',
    user: 'root',
    password: '',
    database: 'test-grpc'
});

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('Database online ' + connection.threadId);
});

module.exports = connection;
