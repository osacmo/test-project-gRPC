
import { Server, ServerCredentials } from '@grpc/grpc-js';
import { AgregarUsuario, GetUsuario, ObtenerUsuarios } from './controllers/usuarios';
import { UsuariosService } from '../proto/usuarios_grpc_pb';
import 'dotenv/config'

function main() {
    const server = new Server();
    server.addService(UsuariosService, {
        agregarUsuario: AgregarUsuario,
        obtenerUsuarios: ObtenerUsuarios,
        getUsuario: GetUsuario
    });
    server.bindAsync(`${process.env.GRPC_SERVER_HOST}:${process.env.GRPC_SERVER_PORT}`, ServerCredentials.createInsecure(), () => {
            server.start();
            console.log('gRPC-Server on port 50051');
        });
}

main();



