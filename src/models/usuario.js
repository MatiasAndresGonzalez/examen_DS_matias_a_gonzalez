import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const Usuario = sequelize.define('Usuario', {
    contraseña: {
        type: DataTypes.STRING,
        allowNull: true
    },
    nombreUsuario: {
        type: DataTypes.STRING,
        allowNull: true
    },
    fechaNacimiento: {
        type: DataTypes.DATE,
        allowNull: true
    },
    idPlan: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
});

export default Usuario;