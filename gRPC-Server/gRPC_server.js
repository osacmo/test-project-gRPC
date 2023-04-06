const PROTO_PATH = './proto/usuarios.proto';
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const { AgregarUsuario, ObtenerUsuarios } = require('./controllers/usuarios');

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
});
const usuarios_proto = grpc.loadPackageDefinition(packageDefinition).usuarios;


function main() {
  const server = new grpc.Server();
  server.addService(usuarios_proto.Usuarios.service, {
    AgregarUsuario,
    ObtenerUsuarios
  });
  server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
    server.start();
    console.log('gRPC-Server on port 50051');
  });
}

main();
