"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vaga_service_1 = __importDefault(require("../services/vaga.service"));
class VagaController {
    constructor() {
    }
    static getInstance() {
        if (!VagaController.instance) {
            VagaController.instance = new VagaController();
        }
        return VagaController.instance;
    }
    criarVaga(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const vagaDto = req.body;
                const vagaSalva = yield vaga_service_1.default.getInstance().criarVaga(vagaDto);
                res.json(vagaSalva);
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    lerTodasVagas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const vagas = yield vaga_service_1.default.getInstance().lerTodasVagas;
            res.json(vagas);
        });
    }
    lerVagaPorId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = req.params.id;
                const vaga = yield vaga_service_1.default.getInstance().lerVagaPorId(id);
                res.json(vaga);
            }
            catch (error) {
                res.status(500).send(error);
            }
        });
    }
}
exports.default = VagaController;
