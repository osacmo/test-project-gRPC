import { Usuario, UsuarioEstatus, UsuarioType } from "../../proto/usuarios_pb";

export function userToClass({ id, usuario, contrasena, estatus, tipo }: Usuario.AsObject) {
    const us = new Usuario();
    us.setId(id);
    us.setUsuario(usuario);
    us.setContrasena(contrasena);
    us.setEstatus(estatus);
    us.setTipo(tipo)
    return us;
}

export const data = [
    { id: 1, usuario: "oscar", contrasena: "e", estatus: UsuarioEstatus.AVAILABLE, tipo: UsuarioType.ADMIN },
    { id: 2, usuario: "oscar", contrasena: "e", estatus: UsuarioEstatus.AVAILABLE, tipo: UsuarioType.ADMIN }
]