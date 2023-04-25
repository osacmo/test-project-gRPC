const { response, request } = require('express');
const client = require('../../gRPC_client');

const crearUsuario = (req = request, res = response) => {

    const data_caso = {
        name: req.body.name,
        age: req.body.age
    }
    console.log(data_caso);

    console.log(client.AgregarUsuario);

    client.AgregarUsuario(data_caso, (err, response) => {
        console.log(response.MsgResponse);
    console.log(JSON.stringify(response))

       /*  res.status(200).json({
            mensaje: response.message
        }); */
    });
}

const getUsuarios = (req = request, res = response) => {
    const rows = [];
    //const call = client.ObtenerUsuarios();

    console.log(client);

    /* call.on('data', (data) => {
        rows.push(data);
    });
    call.on('end', () => {
        console.log("Data obtenida con exito");
        res.status(200).json({ data: rows });
    });
    call.on('error', (e) => {
        console.log("Error al obtener la data");
    }); */
}

module.exports = {
    crearUsuario,
    getUsuarios
};
