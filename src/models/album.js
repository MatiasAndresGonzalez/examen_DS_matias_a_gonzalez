import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const Album = sequelize.define('Album', {
    titulo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    fechaLanzamiento: {
        type: DataTypes.DATE,
        allowNull: true
    },
    imagenPortada: {
        type: DataTypes.STRING,
        allowNull: true
    }
});

export default Album;