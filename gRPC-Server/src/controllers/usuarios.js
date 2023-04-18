const connection = require('../database/connection');

const AgregarUsuario = (call, callback) => {
    const { name, age } = call.request;
    const query = `INSERT INTO user(name, age) VALUES('${name}','${age}')`;

    connection.query(query, function (err, rows, fields) {
        if (err) throw (err);
        callback(null, { message: 'Caso insertando en la BD' });
    });
}

const ObtenerUsuarios = (call) => {
    const query = 'SELECT name, age FROM user';
    connection.query(query, function (err, rows, fields) {
        if (err) throw (err);

        for (const data of rows) {
            call.write(data);
        }
        call.end();
    });
}

module.exports = {
    AgregarUsuario,
    ObtenerUsuarios
};
