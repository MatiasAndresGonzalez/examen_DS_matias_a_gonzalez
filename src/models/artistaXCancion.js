import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const ArtistaXCancion = sequelize.define('ArtistaXCancion', {
    idArtista: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    idCancion: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
});

export default ArtistaXCancion;