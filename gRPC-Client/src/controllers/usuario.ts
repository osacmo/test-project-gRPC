import { Request, Response } from "express";
import client from "../gRPC_client";
import { Usuario, UsuarioEstatus, UsuarioType, getUsuarioRequest } from "../../proto/usuarios_pb";
import { Empty } from "google-protobuf/google/protobuf/empty_pb"

export const crearUsuario = async (req: Request, res: Response) => {

    const us1 = new Usuario();
    us1.setUsuario(req.body.usuario);
    us1.setContrasena(req.body.contraseña);
    us1.setTipo(UsuarioType.CLIENTE);
    us1.setEstatus(UsuarioEstatus.AVAILABLE);

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

export const getUser = (req: Request, res: Response) => {
    const { id } = req.params;
    const req_user = new getUsuarioRequest();
    req_user.setId(parseInt(id));

    client.getUsuario(req_user, (err, response) => {

        if (err) {
            res.status(500).json({
                msg: err.name,
                error: err.message
            });
        } else {
            res.status(200).json({
                user: [response.toObject()]
            });
        }
    });
}

export const getUsuarios = (req: Request, res: Response) => {
    client.obtenerUsuarios(new Empty(), (err, response) => {
        if (err) {
            res.status(500).json({
                msg: err.name,
                error: err.message
            });
        } else {
            res.status(200).json({
                data: response.toObject()
            });
        }
    });
}