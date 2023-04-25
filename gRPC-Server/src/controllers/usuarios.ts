
import connection from "../database/connection";
import { ServerUnaryCall, sendUnaryData } from "@grpc/grpc-js";
import { Empty, MsgResponse, ObjectResponse, Usuario, UsuariosResponse } from "../../proto/usuarios_pb";


export const AgregarUsuario = (call: ServerUnaryCall<Usuario, ObjectResponse>, callback: sendUnaryData<ObjectResponse>) => {

    const name = call.request;
    const age = call.request;
    const query = `INSERT INTO user(name, age) VALUES('${name}','${age}')`;
 

    const efe = new ObjectResponse()
    const ey = new MsgResponse();
    ey.setMessage("OK")
    efe.addMsg(ey)

    connection.query(query, (err) => {
        if (err) throw (err);
        callback(null, efe);
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


