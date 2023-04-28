import { Request, Response } from "express";
import client from "../gRPC_client";
import { Empty, Usuario } from "../../proto/usuarios_pb";

export const crearUsuario = async (req: Request, res: Response) => {

    const us1 = new Usuario();
    us1.setName(req.body.name);
    us1.setAge(req.body.age);

    client.agregarUsuario(us1, (err, response) => {

        if (err) {
            res.status(500).json({
                msg: err.name,
                error: err.message
            });
        } else {
            res.status(200).json({
                msg: response.getMessage()
            });
        }
    });
}

export const getUsuarios = async (req: Request, res: Response) => {

    client.obtenerUsuarios(new Empty(), (err, response) => {
        if (err) console.log(err);
        res.status(200).json({
            data: response.getUsuariosresponseList()
        })
    });

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



