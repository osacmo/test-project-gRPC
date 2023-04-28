import connection from "../database/connection";
import { ServerUnaryCall, sendUnaryData } from "@grpc/grpc-js";
import { Empty, MsgResponse, Usuario, UsuariosResponse } from "../../proto/usuarios_pb";

export const AgregarUsuario = async (call: ServerUnaryCall<Usuario, MsgResponse>, callback: sendUnaryData<MsgResponse>) => {

    const name = call.request.getAge()
    const age = call.request.getName()
    const query = `INSERT INTO usuario(usuario, contraseña, estatus, tipoUsuario_idtipoUsuario) VALUES('${name}','${age}', '1')`;

    const mess = new MsgResponse();
    mess.setMessage("User created.");

    connection.query(query, (err) => {
        if (err) {
            console.log(err.message);
            callback({
                name: "Error in database.",
                message: err.message,
                code: 13
            });
        }
        callback(null, mess);
    });
}

export const ObtenerUsuarios = (call: ServerUnaryCall<Empty, UsuariosResponse>, callback: sendUnaryData<UsuariosResponse>) => {
    const query = 'SELECT usuario, estatus from usuario';

    const us1 = new Usuario()
    us1.setName("Oscar");
    us1.setAge(20);

    const us2 = new Usuario()
    us2.setName("Erik");
    us2.setAge(20);

    const data: Array<Usuario> = [us1, us2];

    connection.query(query, (err, result) => {
        if (err) console.log(err);
        const user_res = new UsuariosResponse();
        user_res.setUsuariosresponseList(data);
        callback(null, user_res);
    })
}