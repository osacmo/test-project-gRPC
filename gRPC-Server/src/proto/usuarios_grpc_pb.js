// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var usuarios_pb = require('./usuarios_pb.js');

function serialize_usuarios_Empty(arg) {
  if (!(arg instanceof usuarios_pb.Empty)) {
    throw new Error('Expected argument of type usuarios.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_usuarios_Empty(buffer_arg) {
  return usuarios_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_usuarios_Reply(arg) {
  if (!(arg instanceof usuarios_pb.Reply)) {
    throw new Error('Expected argument of type usuarios.Reply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_usuarios_Reply(buffer_arg) {
  return usuarios_pb.Reply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_usuarios_Usuario(arg) {
  if (!(arg instanceof usuarios_pb.Usuario)) {
    throw new Error('Expected argument of type usuarios.Usuario');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_usuarios_Usuario(buffer_arg) {
  return usuarios_pb.Usuario.deserializeBinary(new Uint8Array(buffer_arg));
}


var UsuariosService = exports.UsuariosService = {
  agregarUsuario: {
    path: '/usuarios.Usuarios/AgregarUsuario',
    requestStream: false,
    responseStream: false,
    requestType: usuarios_pb.Usuario,
    responseType: usuarios_pb.Reply,
    requestSerialize: serialize_usuarios_Usuario,
    requestDeserialize: deserialize_usuarios_Usuario,
    responseSerialize: serialize_usuarios_Reply,
    responseDeserialize: deserialize_usuarios_Reply,
  },
  obtenerUsuarios: {
    path: '/usuarios.Usuarios/ObtenerUsuarios',
    requestStream: false,
    responseStream: true,
    requestType: usuarios_pb.Empty,
    responseType: usuarios_pb.Usuario,
    requestSerialize: serialize_usuarios_Empty,
    requestDeserialize: deserialize_usuarios_Empty,
    responseSerialize: serialize_usuarios_Usuario,
    responseDeserialize: deserialize_usuarios_Usuario,
  },
};

exports.UsuariosClient = grpc.makeGenericClientConstructor(UsuariosService);
