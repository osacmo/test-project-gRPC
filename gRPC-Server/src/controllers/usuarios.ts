
import connection from "../database/connection";
import { ServerUnaryCall, sendUnaryData } from "@grpc/grpc-js";
import { Empty, MsgResponse, Usuario, UsuariosResponse } from "../../proto/usuarios_pb";


export const AgregarUsuario = (call: ServerUnaryCall<Usuario, MsgResponse>, callback: sendUnaryData<MsgResponse>) => {

    const name = call.request;
    const age = call.request;
    const query = `INSERT INTO user(name, age) VALUES('${name}','${age}')`;
    const message = new MsgResponse();
    message.setMessage("User created.")

    connection.query(query, (err) => {
        if (err) throw (err);

        callback(null, message);
    });
}

export const ObtenerUsuarios = (call: ServerUnaryCall<Empty, UsuariosResponse>, callback: sendUnaryData<UsuariosResponse>) => {
    const query = 'SELECT * FROM user';
    connection.query(query, function (err, results) {
        if (err) throw (err);

        const users = new UsuariosResponse();
        console.log(results);
        //users.setUsuariosresponseList(results.)
        //call.end();
    });
}


