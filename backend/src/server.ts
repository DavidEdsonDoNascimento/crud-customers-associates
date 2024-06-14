import express from 'express';
import { ConnectionService } from './services/ConnectionService';
import { routes } from './routes';
import cors from 'cors';
const PORT = 3333;

const app = express();

ConnectionService.connect();
app.use(cors());
app.use(express.json(), routes)

app.listen(PORT, () => { console.log(`API running in port: ${PORT}`) });