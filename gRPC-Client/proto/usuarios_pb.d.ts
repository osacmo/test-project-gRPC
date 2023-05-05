// package: usuarios
// file: usuarios.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class Usuario extends jspb.Message { 
    getId(): number;
    setId(value: number): Usuario;
    getUsuario(): string;
    setUsuario(value: string): Usuario;
    getContrasena(): string;
    setContrasena(value: string): Usuario;
    getEstatus(): UsuarioEstatus;
    setEstatus(value: UsuarioEstatus): Usuario;
    getTipo(): UsuarioType;
    setTipo(value: UsuarioType): Usuario;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Usuario.AsObject;
    static toObject(includeInstance: boolean, msg: Usuario): Usuario.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Usuario, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Usuario;
    static deserializeBinaryFromReader(message: Usuario, reader: jspb.BinaryReader): Usuario;
}

export namespace Usuario {
    export type AsObject = {
        id: number,
        usuario: string,
        contrasena: string,
        estatus: UsuarioEstatus,
        tipo: UsuarioType,
    }
}

export class MsgResponse extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): MsgResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MsgResponse.AsObject;
    static toObject(includeInstance: boolean, msg: MsgResponse): MsgResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MsgResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MsgResponse;
    static deserializeBinaryFromReader(message: MsgResponse, reader: jspb.BinaryReader): MsgResponse;
}

export namespace MsgResponse {
    export type AsObject = {
        message: string,
    }
}

export class getUsuarioRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): getUsuarioRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): getUsuarioRequest.AsObject;
    static toObject(includeInstance: boolean, msg: getUsuarioRequest): getUsuarioRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: getUsuarioRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): getUsuarioRequest;
    static deserializeBinaryFromReader(message: getUsuarioRequest, reader: jspb.BinaryReader): getUsuarioRequest;
}

export namespace getUsuarioRequest {
    export type AsObject = {
        id: number,
    }
}

export enum UsuarioEstatus {
    OFFLINE = 0,
    AVAILABLE = 1,
}

export enum UsuarioType {
    UNKNOWN = 0,
    CLIENTE = 1,
    ADMIN = 2,
}
