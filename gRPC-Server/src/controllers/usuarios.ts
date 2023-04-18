
import { ServerUnaryCall, sendUnaryData } from "@grpc/grpc-js";
import { Reply, Usuario } from "../../proto/usuarios_pb";


export const AgregarUsuario = (call: ServerUnaryCall<Usuario, Reply>, callback: sendUnaryData<Reply>) => {

    const esto = call.request.toObject
    console.log(esto);
    const ok = new Reply();
    ok.setMessage("je")
    //const query = `INSERT INTO user(name, age) VALUES('${name}','${age}')`;
    callback(null, ok)
}