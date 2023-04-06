const { response, request } = require('express');
const client = require('../gRPC_client');

const crearUsuario = (req = request, res = response) => {

    const data_caso = {
        name: req.body.name,
        age: req.body.age
    }

    client.AgregarUsuario(data_caso, (err, response) => {
        res.status(200).json({
            mensaje: response.message
        });
    });
}

const getUsuarios = (req = request, res = response) => {
    const rows = [];
    const call = client.ObtenerUsuarios();

    call.on('data', (data) => {
        rows.push(data);
    });
    call.on('end', () => {
        console.log("Data obtenida con exito");
        res.status(200).json({ data: rows });
    });
    call.on('error', (e) => {
        console.log("Error al obtener la data");
    });
}

module.exports = {
    crearUsuario,
    getUsuarios
};
