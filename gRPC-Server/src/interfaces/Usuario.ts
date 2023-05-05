import { Usuario } from "../../proto/usuarios_pb";

interface IUser  {
    id: number,
    usuario: string,
    contraseña: string,
    estatus: boolean,
    type: number
}

export default IUser;