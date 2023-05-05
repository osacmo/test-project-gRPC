import { credentials } from "@grpc/grpc-js";
import { UsuariosClient } from "../proto/usuarios_grpc_pb";
import 'dotenv/config'

const client = new UsuariosClient(`${process.env.GRPC_CLIENT_HOST}:${process.env.GRPC_CLIENT_PORT}`, credentials.createInsecure());

export default client;
