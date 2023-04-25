const PROTO_PATH = './proto/usuarios.proto';

const parseArgs = require('minimist');
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const packageDefinition = protoLoader.loadSync(PROTO_PATH,
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  });
const usuarios_proto = grpc.loadPackageDefinition(packageDefinition).usuarios;

const argv = parseArgs(process.argv.slice(2), { string: 'target' });
var target;

if (argv.target) {
  target = argv.target;
} else {
  target = 'localhost:50051';
}
const client = new usuarios_proto.Usuarios(target, grpc.credentials.createInsecure());

module.exports = client;
