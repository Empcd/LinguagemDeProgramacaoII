"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const vaga_controller_1 = __importDefault(require("../controllers/vaga.controller"));
const zod_express_middleware_1 = require("zod-express-middleware");
const VagaDto_1 = require("../dto/VagaDto");
const vagaRouter = (0, express_1.Router)();
vagaRouter.post('/', (0, zod_express_middleware_1.validateRequest)({ body: VagaDto_1.VagaSchema }), vaga_controller_1.default.getInstance().criarVaga);
vagaRouter.get('/ :id', (0, zod_express_middleware_1.validateRequest)({ params: VagaDto_1.VagaId }), vaga_controller_1.default.getInstance().lerVagaPorId);
vagaRouter.get('/', vaga_controller_1.default.getInstance().lerTodasVagas);
vagaRouter.delete('/ :id', (0, zod_express_middleware_1.validateRequest)({ params: VagaDto_1.VagaId }), vaga_controller_1.default.getInstance().deletarVaga);
exports.default = vagaRouter;
