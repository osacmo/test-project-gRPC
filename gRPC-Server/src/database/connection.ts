import mysql from 'mysql2';

const connection = mysql.createConnection({
    //host: 'example.org',
    user: 'root',
    port: 3306,
    password: 'secret',
    database: 'test-grpc'
});

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('Database online ' + connection.threadId);
});


export default connection;
