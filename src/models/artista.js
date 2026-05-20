import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const Artista = sequelize.define('Artista', {
    nombreArtista: {
        type: DataTypes.STRING,
        allowNull: true
    },
    biografia: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

export default Artista;