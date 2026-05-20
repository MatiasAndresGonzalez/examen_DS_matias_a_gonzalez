import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const Plan = sequelize.define('Plan', {
    planActivo: {
        type: DataTypes.STRING,
        allowNull: true
    },
    precio: {
        type: DataTypes.DECIMAL(10, 2),
        validate: { min: 0 },
        allowNull: true
    },
    calidadAudio: {
        type: DataTypes.STRING,
        allowNull: true
    },
    limiteDispositivos: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    fechaPlan: {
        type: DataTypes.DATE,
        allowNull: true
    }
});

export default Plan;