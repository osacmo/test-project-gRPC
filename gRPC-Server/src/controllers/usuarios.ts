import connection from "../database/connection";
import { ServerUnaryCall, ServerWritableStream, sendUnaryData } from "@grpc/grpc-js";
import { MsgResponse, Usuario, UsuarioType, getUsuarioRequest } from "../../proto/usuarios_pb";
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

export const ObtenerUsuarios = async (call: ServerWritableStream<Empty, Empty>) => {

    try {
        const result = await User.findByPk(1, { raw: true });
        console.log(result);

    } catch (error) {
        console.log(error);
    }

}

export const GetUsuario = async (call: ServerUnaryCall<getUsuarioRequest, Usuario>, callback: sendUnaryData<Usuario>) => {

    try {
        const id = call.request.getId();
        const user = new Usuario()
        const result = await User.findByPk(id.toString(), { plain: true });

        user.setId(result?.getDataValue("idusuario"));
        user.setUsuario(result?.getDataValue("usuario"));
        user.setEstatus(result?.getDataValue("estatus"));
        user.setTipo(result?.getDataValue("tipoUsuario_idtipoUsuario"));

        callback(null, user);

    } catch (error) {

        callback({
            name: "Error in database.",
            message: `${error}`,
            code: 13
        });
    }
}