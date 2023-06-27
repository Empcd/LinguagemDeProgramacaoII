import { Router } from "express";
import VagaController from "../controllers/vaga.controller";
import { validateRequest } from "zod-express-middleware";
import { VagaId, VagaSchema } from "../dto/VagaDto";
import upload from "../middlewares/storage";

const vagaRouter = Router();

vagaRouter.post('/create', validateRequest({body: VagaSchema}), VagaController.getInstance().criarVaga);
vagaRouter.get('/read/ :id', validateRequest({params: VagaId}), VagaController.getInstance().lerVagaPorId);
vagaRouter.get('/read', VagaController.getInstance().lerTodasVagas);

export default vagaRouter;
