"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VagaRepositorio = void 0;
const data_source_1 = require("../../data-source");
const Vaga_1 = __importDefault(require("../entities/Vaga"));
exports.VagaRepositorio = data_source_1.AppDataSource.getRepository(Vaga_1.default);
