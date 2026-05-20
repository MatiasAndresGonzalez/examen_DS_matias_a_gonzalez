import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const Playlist = sequelize.define('Playlist', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: true
    },
    fechaCreacion: {
        type: DataTypes.DATE,
        allowNull: true
    },
    ordenCancion: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    idUsuario: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
});

export default Playlist;