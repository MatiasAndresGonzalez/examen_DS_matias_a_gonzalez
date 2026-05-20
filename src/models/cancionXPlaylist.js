import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const CancionXPlaylist = sequelize.define('CancionXPlaylist', {
    idCancion: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    idPlaylist: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    idUsuario: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
});

export default CancionXPlaylist;