// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var usuarios_pb = require('./usuarios_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_usuarios_getUsuarioRequest(arg) {
  if (!(arg instanceof usuarios_pb.getUsuarioRequest)) {
    throw new Error('Expected argument of type usuarios.getUsuarioRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_usuarios_getUsuarioRequest(buffer_arg) {
  return usuarios_pb.getUsuarioRequest.deserializeBinary(new Uint8Array(buffer_arg));
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
  getUsuario: {
    path: '/usuarios.Usuarios/getUsuario',
    requestStream: false,
    responseStream: false,
    requestType: usuarios_pb.getUsuarioRequest,
    responseType: usuarios_pb.Usuario,
    requestSerialize: serialize_usuarios_getUsuarioRequest,
    requestDeserialize: deserialize_usuarios_getUsuarioRequest,
    responseSerialize: serialize_usuarios_Usuario,
    responseDeserialize: deserialize_usuarios_Usuario,
  },
  obtenerUsuarios: {
    path: '/usuarios.Usuarios/ObtenerUsuarios',
    requestStream: false,
    responseStream: true,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: usuarios_pb.Usuario,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_usuarios_Usuario,
    responseDeserialize: deserialize_usuarios_Usuario,
  },
};

exports.UsuariosClient = grpc.makeGenericClientConstructor(UsuariosService);
