// package: usuarios
// file: usuarios.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Usuario extends jspb.Message { 
    getName(): string;
    setName(value: string): Usuario;
    getAge(): number;
    setAge(value: number): Usuario;

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
        name: string,
        age: number,
    }
}

export class UsuariosResponse extends jspb.Message { 
    clearUsuariosresponseList(): void;
    getUsuariosresponseList(): Array<Usuario>;
    setUsuariosresponseList(value: Array<Usuario>): UsuariosResponse;
    addUsuariosresponse(value?: Usuario, index?: number): Usuario;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UsuariosResponse.AsObject;
    static toObject(includeInstance: boolean, msg: UsuariosResponse): UsuariosResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UsuariosResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UsuariosResponse;
    static deserializeBinaryFromReader(message: UsuariosResponse, reader: jspb.BinaryReader): UsuariosResponse;
}

export namespace UsuariosResponse {
    export type AsObject = {
        usuariosresponseList: Array<Usuario.AsObject>,
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

export class Empty extends jspb.Message { 

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Empty.AsObject;
    static toObject(includeInstance: boolean, msg: Empty): Empty.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Empty, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Empty;
    static deserializeBinaryFromReader(message: Empty, reader: jspb.BinaryReader): Empty;
}

export namespace Empty {
    export type AsObject = {
    }
}
