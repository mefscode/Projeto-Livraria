import express from 'express';
import cors from 'cors';
import 'dotenv/config.js';
import AddRoutes from './routes.js';

const api = express();

api.use(express.json());
api.use(cors());
AddRoutes(api);

const PORT = process.env.PORT
api.listen(PORT, () => console.log("A API subiu com sucesso na porta " + PORT));