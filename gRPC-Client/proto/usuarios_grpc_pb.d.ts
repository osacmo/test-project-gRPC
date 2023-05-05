// package: usuarios
// file: usuarios.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as usuarios_pb from "./usuarios_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface IUsuariosService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    agregarUsuario: IUsuariosService_IAgregarUsuario;
    getUsuario: IUsuariosService_IgetUsuario;
    obtenerUsuarios: IUsuariosService_IObtenerUsuarios;
}

interface IUsuariosService_IAgregarUsuario extends grpc.MethodDefinition<usuarios_pb.Usuario, usuarios_pb.MsgResponse> {
    path: "/usuarios.Usuarios/AgregarUsuario";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<usuarios_pb.Usuario>;
    requestDeserialize: grpc.deserialize<usuarios_pb.Usuario>;
    responseSerialize: grpc.serialize<usuarios_pb.MsgResponse>;
    responseDeserialize: grpc.deserialize<usuarios_pb.MsgResponse>;
}
interface IUsuariosService_IgetUsuario extends grpc.MethodDefinition<usuarios_pb.getUsuarioRequest, usuarios_pb.Usuario> {
    path: "/usuarios.Usuarios/getUsuario";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<usuarios_pb.getUsuarioRequest>;
    requestDeserialize: grpc.deserialize<usuarios_pb.getUsuarioRequest>;
    responseSerialize: grpc.serialize<usuarios_pb.Usuario>;
    responseDeserialize: grpc.deserialize<usuarios_pb.Usuario>;
}
interface IUsuariosService_IObtenerUsuarios extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, usuarios_pb.Usuario> {
    path: "/usuarios.Usuarios/ObtenerUsuarios";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<usuarios_pb.Usuario>;
    responseDeserialize: grpc.deserialize<usuarios_pb.Usuario>;
}

export const UsuariosService: IUsuariosService;

export interface IUsuariosServer extends grpc.UntypedServiceImplementation {
    agregarUsuario: grpc.handleUnaryCall<usuarios_pb.Usuario, usuarios_pb.MsgResponse>;
    getUsuario: grpc.handleUnaryCall<usuarios_pb.getUsuarioRequest, usuarios_pb.Usuario>;
    obtenerUsuarios: grpc.handleServerStreamingCall<google_protobuf_empty_pb.Empty, usuarios_pb.Usuario>;
}

export interface IUsuariosClient {
    agregarUsuario(request: usuarios_pb.Usuario, callback: (error: grpc.ServiceError | null, response: usuarios_pb.MsgResponse) => void): grpc.ClientUnaryCall;
    agregarUsuario(request: usuarios_pb.Usuario, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: usuarios_pb.MsgResponse) => void): grpc.ClientUnaryCall;
    agregarUsuario(request: usuarios_pb.Usuario, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: usuarios_pb.MsgResponse) => void): grpc.ClientUnaryCall;
    getUsuario(request: usuarios_pb.getUsuarioRequest, callback: (error: grpc.ServiceError | null, response: usuarios_pb.Usuario) => void): grpc.ClientUnaryCall;
    getUsuario(request: usuarios_pb.getUsuarioRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: usuarios_pb.Usuario) => void): grpc.ClientUnaryCall;
    getUsuario(request: usuarios_pb.getUsuarioRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: usuarios_pb.Usuario) => void): grpc.ClientUnaryCall;
    obtenerUsuarios(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<usuarios_pb.Usuario>;
    obtenerUsuarios(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<usuarios_pb.Usuario>;
}

export class UsuariosClient extends grpc.Client implements IUsuariosClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public agregarUsuario(request: usuarios_pb.Usuario, callback: (error: grpc.ServiceError | null, response: usuarios_pb.MsgResponse) => void): grpc.ClientUnaryCall;
    public agregarUsuario(request: usuarios_pb.Usuario, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: usuarios_pb.MsgResponse) => void): grpc.ClientUnaryCall;
    public agregarUsuario(request: usuarios_pb.Usuario, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: usuarios_pb.MsgResponse) => void): grpc.ClientUnaryCall;
    public getUsuario(request: usuarios_pb.getUsuarioRequest, callback: (error: grpc.ServiceError | null, response: usuarios_pb.Usuario) => void): grpc.ClientUnaryCall;
    public getUsuario(request: usuarios_pb.getUsuarioRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: usuarios_pb.Usuario) => void): grpc.ClientUnaryCall;
    public getUsuario(request: usuarios_pb.getUsuarioRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: usuarios_pb.Usuario) => void): grpc.ClientUnaryCall;
    public obtenerUsuarios(request: google_protobuf_empty_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<usuarios_pb.Usuario>;
    public obtenerUsuarios(request: google_protobuf_empty_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<usuarios_pb.Usuario>;
}
