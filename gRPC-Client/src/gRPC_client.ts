import { credentials } from "@grpc/grpc-js";
import { UsuariosClient } from "../proto/usuarios_grpc_pb";

const client = new UsuariosClient('0.0.0.0:50051', credentials.createInsecure());

export default client;
