import { DataTypes } from "sequelize";
import db from "../database/connection";

const User = db.define('usuario', {
    idusuario: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    usuario: {
        type: DataTypes.STRING,
        allowNull: false
    },
    contraseña: {
        type: DataTypes.STRING,
        allowNull: false
    },
    estatus: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
    },
    tipoUsuario_idtipoUsuario: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false,
    freezeTableName: true,
});

export default User;