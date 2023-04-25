
import { Server, ServerCredentials } from '@grpc/grpc-js';
import { AgregarUsuario, ObtenerUsuarios } from './controllers/usuarios';
import { UsuariosService } from '../proto/usuarios_grpc_pb';


function main() {
    const server = new Server();
    server.addService(UsuariosService, {
        agregarUsuario: AgregarUsuario,
        obtenerUsuarios: ObtenerUsuarios
    });
    server.bindAsync('0.0.0.0:8080', ServerCredentials.createInsecure(), () => {
        server.start();
        console.log('gRPC-Server on port 50051');
    });
}

main();

