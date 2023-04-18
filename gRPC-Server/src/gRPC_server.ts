
import { Server, ServerCredentials } from '@grpc/grpc-js';
import { AgregarUsuario } from './controllers/usuarios';
import { UsuariosService } from '../proto/usuarios_grpc_pb';


function main() {
    'Caso insertando en la BD'
    const server = new Server();
    server.addService(UsuariosService,{ AgregarUsuario});
    server.bindAsync('0.0.0.0:50051', ServerCredentials.createInsecure(), () => {
        server.start();
        console.log('gRPC-Server on port 50051');
    });
}

main();

