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

function serialize_usuarios_MsgResponse(arg) {
  if (!(arg instanceof usuarios_pb.MsgResponse)) {
    throw new Error('Expected argument of type usuarios.MsgResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_usuarios_MsgResponse(buffer_arg) {
  return usuarios_pb.MsgResponse.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_usuarios_UsuariosResponse(arg) {
  if (!(arg instanceof usuarios_pb.UsuariosResponse)) {
    throw new Error('Expected argument of type usuarios.UsuariosResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_usuarios_UsuariosResponse(buffer_arg) {
  return usuarios_pb.UsuariosResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var UsuariosService = exports.UsuariosService = {
  agregarUsuario: {
    path: '/usuarios.Usuarios/AgregarUsuario',
    requestStream: false,
    responseStream: false,
    requestType: usuarios_pb.Usuario,
    responseType: usuarios_pb.MsgResponse,
    requestSerialize: serialize_usuarios_Usuario,
    requestDeserialize: deserialize_usuarios_Usuario,
    responseSerialize: serialize_usuarios_MsgResponse,
    responseDeserialize: deserialize_usuarios_MsgResponse,
  },
  obtenerUsuarios: {
    path: '/usuarios.Usuarios/ObtenerUsuarios',
    requestStream: false,
    responseStream: false,
    requestType: usuarios_pb.Empty,
    responseType: usuarios_pb.UsuariosResponse,
    requestSerialize: serialize_usuarios_Empty,
    requestDeserialize: deserialize_usuarios_Empty,
    responseSerialize: serialize_usuarios_UsuariosResponse,
    responseDeserialize: deserialize_usuarios_UsuariosResponse,
  },
};

exports.UsuariosClient = grpc.makeGenericClientConstructor(UsuariosService);
