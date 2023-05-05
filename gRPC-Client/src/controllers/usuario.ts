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

/* export const getUsuarios = (req: Request, res: Response) => {
    const rows: Array<Usuario> = [];
    const call = client.obtenerUsuarios(new Empty);

    call.on('data', (data) => {
        rows.push(data);
        console.log(data);
    });
    call.on('end', () => {
        console.log("Data obtenida con exito");
        res.status(200).json({ data: rows });
    });
    call.on('error', (e) => {
        console.log("Error al obtener la data");
        console.log(e.message);
    });
} 
 */

//TODO: Need this part, because the grpc implementacion, it's strange.

const esto = () => {
    return new Promise<Usuario[]>((resolve, reject) => {
        const stream = client.obtenerUsuarios(new Empty());
        const users: Usuario[] = [];
        stream.on("data", (user) => users.push(user));
        stream.on("error", reject);
        stream.on("end", () => resolve(users));
    });
}

export const getUsuarios = (req: Request, res: Response) => {
    esto().then((users) => {
        console.log(users);
    }).catch((error) => {
        console.log(error);
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