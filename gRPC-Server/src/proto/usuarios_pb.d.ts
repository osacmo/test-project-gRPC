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

export class Reply extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): Reply;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Reply.AsObject;
    static toObject(includeInstance: boolean, msg: Reply): Reply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Reply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Reply;
    static deserializeBinaryFromReader(message: Reply, reader: jspb.BinaryReader): Reply;
}

export namespace Reply {
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
