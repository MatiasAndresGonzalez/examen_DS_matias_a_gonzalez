import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import routes from './routes/index.js';

const app = express();

app.use(cors());          // Permite que react se conecte
app.use(morgan('combined'));        // Muestra: GET /products 200 en consola
app.use(express.json());  // Entiende los objetos JSON que enviamos

app.use('/', routes);


export default app;