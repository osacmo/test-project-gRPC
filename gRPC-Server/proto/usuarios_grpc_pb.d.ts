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

interface IUsuariosService_IAgregarUsuario extends grpc.MethodDefinition<usuarios_pb.Usuario, usuarios_pb.ObjectResponse> {
    path: "/usuarios.Usuarios/AgregarUsuario";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<usuarios_pb.Usuario>;
    requestDeserialize: grpc.deserialize<usuarios_pb.Usuario>;
    responseSerialize: grpc.serialize<usuarios_pb.ObjectResponse>;
    responseDeserialize: grpc.deserialize<usuarios_pb.ObjectResponse>;
}
interface IUsuariosService_IObtenerUsuarios extends grpc.MethodDefinition<usuarios_pb.Empty, usuarios_pb.UsuariosResponse> {
    path: "/usuarios.Usuarios/ObtenerUsuarios";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<usuarios_pb.Empty>;
    requestDeserialize: grpc.deserialize<usuarios_pb.Empty>;
    responseSerialize: grpc.serialize<usuarios_pb.UsuariosResponse>;
    responseDeserialize: grpc.deserialize<usuarios_pb.UsuariosResponse>;
}

export const UsuariosService: IUsuariosService;

export interface IUsuariosServer extends grpc.UntypedServiceImplementation {
    agregarUsuario: grpc.handleUnaryCall<usuarios_pb.Usuario, usuarios_pb.ObjectResponse>;
    obtenerUsuarios: grpc.handleUnaryCall<usuarios_pb.Empty, usuarios_pb.UsuariosResponse>;
}

export interface IUsuariosClient {
    agregarUsuario(request: usuarios_pb.Usuario, callback: (error: grpc.ServiceError | null, response: usuarios_pb.ObjectResponse) => void): grpc.ClientUnaryCall;
    agregarUsuario(request: usuarios_pb.Usuario, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: usuarios_pb.ObjectResponse) => void): grpc.ClientUnaryCall;
    agregarUsuario(request: usuarios_pb.Usuario, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: usuarios_pb.ObjectResponse) => void): grpc.ClientUnaryCall;
    obtenerUsuarios(request: usuarios_pb.Empty, callback: (error: grpc.ServiceError | null, response: usuarios_pb.UsuariosResponse) => void): grpc.ClientUnaryCall;
    obtenerUsuarios(request: usuarios_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: usuarios_pb.UsuariosResponse) => void): grpc.ClientUnaryCall;
    obtenerUsuarios(request: usuarios_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: usuarios_pb.UsuariosResponse) => void): grpc.ClientUnaryCall;
}

export class UsuariosClient extends grpc.Client implements IUsuariosClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public agregarUsuario(request: usuarios_pb.Usuario, callback: (error: grpc.ServiceError | null, response: usuarios_pb.ObjectResponse) => void): grpc.ClientUnaryCall;
    public agregarUsuario(request: usuarios_pb.Usuario, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: usuarios_pb.ObjectResponse) => void): grpc.ClientUnaryCall;
    public agregarUsuario(request: usuarios_pb.Usuario, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: usuarios_pb.ObjectResponse) => void): grpc.ClientUnaryCall;
    public obtenerUsuarios(request: usuarios_pb.Empty, callback: (error: grpc.ServiceError | null, response: usuarios_pb.UsuariosResponse) => void): grpc.ClientUnaryCall;
    public obtenerUsuarios(request: usuarios_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: usuarios_pb.UsuariosResponse) => void): grpc.ClientUnaryCall;
    public obtenerUsuarios(request: usuarios_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: usuarios_pb.UsuariosResponse) => void): grpc.ClientUnaryCall;
}
