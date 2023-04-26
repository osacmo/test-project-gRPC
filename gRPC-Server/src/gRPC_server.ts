
import { Server, ServerCredentials } from '@grpc/grpc-js';
import { AgregarUsuario, ObtenerUsuarios } from './controllers/usuarios';
import { UsuariosService } from '../proto/usuarios_grpc_pb';
import connection from './database/connection';


function main() {
    const server = new Server();
    server.addService(UsuariosService, {
        agregarUsuario: AgregarUsuario,
        obtenerUsuarios: ObtenerUsuarios
    });
    server.bindAsync('localhost:50051', ServerCredentials.createInsecure(), () => {
        server.start();
        console.log('gRPC-Server on port 50051');
    });
}

main();



