import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: 'mysql-db',
    user: 'root',
    password: 'secret',
    database: 'test-grpc',
    port: 3306
});

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('Database online ' + connection.threadId);
});

export default connection;
