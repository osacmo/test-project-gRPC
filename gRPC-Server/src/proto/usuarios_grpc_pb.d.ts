// package: usuarios
// file: usuarios.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as usuarios_pb from "./usuarios_pb";

interface IUsuariosService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    agregarUsuario: IUsuariosService_IAgregarUsuario;
    obtenerUsuarios: IUsuariosService_IObtenerUsuarios;
}

interface IUsuariosService_IAgregarUsuario extends grpc.MethodDefinition<usuarios_pb.Usuario, usuarios_pb.Reply> {
    path: "/usuarios.Usuarios/AgregarUsuario";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<usuarios_pb.Usuario>;
    requestDeserialize: grpc.deserialize<usuarios_pb.Usuario>;
    responseSerialize: grpc.serialize<usuarios_pb.Reply>;
    responseDeserialize: grpc.deserialize<usuarios_pb.Reply>;
}
interface IUsuariosService_IObtenerUsuarios extends grpc.MethodDefinition<usuarios_pb.Empty, usuarios_pb.Usuario> {
    path: "/usuarios.Usuarios/ObtenerUsuarios";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<usuarios_pb.Empty>;
    requestDeserialize: grpc.deserialize<usuarios_pb.Empty>;
    responseSerialize: grpc.serialize<usuarios_pb.Usuario>;
    responseDeserialize: grpc.deserialize<usuarios_pb.Usuario>;
}

export const UsuariosService: IUsuariosService;

export interface IUsuariosServer extends grpc.UntypedServiceImplementation {
    agregarUsuario: grpc.handleUnaryCall<usuarios_pb.Usuario, usuarios_pb.Reply>;
    obtenerUsuarios: grpc.handleServerStreamingCall<usuarios_pb.Empty, usuarios_pb.Usuario>;
}

export interface IUsuariosClient {
    agregarUsuario(request: usuarios_pb.Usuario, callback: (error: grpc.ServiceError | null, response: usuarios_pb.Reply) => void): grpc.ClientUnaryCall;
    agregarUsuario(request: usuarios_pb.Usuario, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: usuarios_pb.Reply) => void): grpc.ClientUnaryCall;
    agregarUsuario(request: usuarios_pb.Usuario, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: usuarios_pb.Reply) => void): grpc.ClientUnaryCall;
    obtenerUsuarios(request: usuarios_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<usuarios_pb.Usuario>;
    obtenerUsuarios(request: usuarios_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<usuarios_pb.Usuario>;
}

export class UsuariosClient extends grpc.Client implements IUsuariosClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public agregarUsuario(request: usuarios_pb.Usuario, callback: (error: grpc.ServiceError | null, response: usuarios_pb.Reply) => void): grpc.ClientUnaryCall;
    public agregarUsuario(request: usuarios_pb.Usuario, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: usuarios_pb.Reply) => void): grpc.ClientUnaryCall;
    public agregarUsuario(request: usuarios_pb.Usuario, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: usuarios_pb.Reply) => void): grpc.ClientUnaryCall;
    public obtenerUsuarios(request: usuarios_pb.Empty, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<usuarios_pb.Usuario>;
    public obtenerUsuarios(request: usuarios_pb.Empty, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<usuarios_pb.Usuario>;
}
