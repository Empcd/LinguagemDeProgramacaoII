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
const Vaga_1 = __importDefault(require("../models/entities/Vaga"));
const Reposit_rio_1 = require("../models/repositories/Reposit\u00F3rio");
class VagaService {
    constructor() {
    }
    static getInstance() {
        if (!VagaService.instance) {
            VagaService.instance = new VagaService();
        }
        return VagaService.instance;
    }
    criarVaga(dto) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const vaga = new Vaga_1.default();
                vaga.descricao = dto.descricao;
                vaga.id = Math.round(Math.random() * 1E6).toString();
                vaga.nome = dto.nome;
                vaga.salario = dto.salario;
                vaga.tipodevaga = dto.tipodevaga;
                vaga.outrosrequisitos = dto.outrosrequisitos;
                vaga.especificacao = dto.especificacao;
                return yield Reposit_rio_1.VagaRepositorio.save(vaga);
            }
            catch (err) {
                return Promise.reject(new Error('Não consegui salvar.'));
            }
        });
    }
    lerTodasVagas() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield Reposit_rio_1.VagaRepositorio.find();
        });
    }
    lerVagaPorId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const vagaSelecionada = yield Reposit_rio_1.VagaRepositorio.findOneBy({ id });
            if (vagaSelecionada) {
                return Promise.resolve(vagaSelecionada);
            }
            else {
                return Promise.reject('Not Found');
            }
        });
    }
    deletarVaga(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield Reposit_rio_1.VagaRepositorio.delete({ id });
            }
            catch (err) {
                return Promise.reject('Vaga inesistente');
            }
        });
    }
}
exports.default = VagaService;
