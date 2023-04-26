import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: 'mysqldb',
    user: 'root',
    port: 3307,
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
