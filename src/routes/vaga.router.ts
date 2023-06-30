import { Router } from "express";
import VagaController from "../controllers/vaga.controller";
import { validateRequest } from "zod-express-middleware";
import { VagaId, VagaSchema } from "../dto/VagaDto";
import upload from "../middlewares/storage";

const vagaRouter = Router();

vagaRouter.post('/', validateRequest({body: VagaSchema}), VagaController.getInstance().criarVaga);
vagaRouter.get('/ :id', validateRequest({params: VagaId}), VagaController.getInstance().lerVagaPorId);
vagaRouter.get('/', VagaController.getInstance().lerTodasVagas);
vagaRouter.delete('/ :id', validateRequest({params:VagaId}),VagaController.getInstance().deletarVaga)

export default vagaRouter;
