import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const Album = sequelize.define('Album', {
    fechaHoraReproduccion: {
        type: DataTypes.DATE,
        allowNull: true
    },
    dispositivo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    idUsuario: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    idCancion: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
});

export default Album;