import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const Cancion = sequelize.define('Cancion', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    duracion: {
        type: DataTypes.TIME,
        allowNull: true
    },
    generoPrincipal: {
        type: DataTypes.STRING,
        allowNull: true
    },
    idAlbum: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
});

export default Cancion;