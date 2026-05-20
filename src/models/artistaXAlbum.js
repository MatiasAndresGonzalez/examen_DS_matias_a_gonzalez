import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const ArtistaXAlbum = sequelize.define('ArtistaXAlbum', {
    idArtista: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    idAlbum: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
});

export default ArtistaXAlbum;