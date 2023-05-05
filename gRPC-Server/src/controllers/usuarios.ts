import connection from "../database/connection";
import { ServerUnaryCall, ServerWritableStream, sendUnaryData } from "@grpc/grpc-js";
import { MsgResponse, Usuario, UsuarioType, UsuariosList, getUsuarioRequest } from "../../proto/usuarios_pb";
import { Empty } from "google-protobuf/google/protobuf/empty_pb"
import User from "../models/Usuario";

export const AgregarUsuario = async (call: ServerUnaryCall<Usuario, MsgResponse>, callback: sendUnaryData<MsgResponse>) => {

    const usuario = call.request.getUsuario();
    const contraseña = call.request.getContrasena();

    const mess = new MsgResponse();
    mess.setMessage("User created.");

    try {
        await User
            .create({ usuario, contraseña, tipoUsuario_idtipoUsuario: UsuarioType.ADMIN });
        callback(null, mess);

    } catch (error) {
        callback({
            name: "Error in database.",
            message: "Error",
            code: 13
        });
    }
}

export const ObtenerUsuarios = async (call: ServerUnaryCall<Empty, UsuariosList>, callback: sendUnaryData<UsuariosList>) => {

    try {
        const result = await User.findAll({
            raw: true,
            where: {
                estatus: true
            }
        });

        const arr_users: Array<Usuario> = result.map(el => userToClass(el));
        const nLis = new UsuariosList();
        nLis.setUsuariosList(arr_users);
        callback(null, nLis);

    } catch (error) {
        callback({
            name: "Error in database.",
            message: `${error}`,
            code: 13
        });
    }
}

export const GetUsuario = async (call: ServerUnaryCall<getUsuarioRequest, Usuario>, callback: sendUnaryData<Usuario>) => {

    try {
        const id = call.request.getId();
        const result = await User.findByPk(id.toString(), { raw: true });
        callback(null, userToClass(result));

    } catch (error) {

        callback({
            name: "Error in database.",
            message: `${error}`,
            code: 13
        });
    }
}


export function userToClass(post: any) {
    const { idusuario: id,
        usuario,
        contraseña: contrasena,
        estatus,
        tipoUsuario_idtipoUsuario: tipo
    } = post;

    const us = new Usuario();
    us.setId(id);
    us.setUsuario(usuario);
    us.setContrasena(contrasena);
    us.setEstatus(estatus);
    us.setTipo(tipo)
    return us as Usuario;
}
