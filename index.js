import app from "./src/app.js";
import { sequelize, testConnection } from "./src/config/database.js";
import './src/models/index.js'

const startServer = async () => {
    try {
        await testConnection();
        
        await sequelize.sync({ force: false });

        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`🚀 App corriendo en http://localhost:${PORT}`);
        });
    } catch (error) {
        console.log('💥 Error fatal:', error)
    }
};

startServer();