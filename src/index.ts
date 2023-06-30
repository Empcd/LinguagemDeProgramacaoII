import express, { Express } from "express";
import cors from "cors";
import { AppDataSource } from "./data-source";
import vagaRouter from "./routes/vaga.router";

const app: Express = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

AppDataSource.initialize().then(() => console.log('Banco Inicializado.'))

app.use('/app/vagas', vagaRouter);

app.listen(3838, () => console.log('Iniciando'));
