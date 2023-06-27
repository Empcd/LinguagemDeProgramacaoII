"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VagaId = exports.VagaSchema = void 0;
const zod_1 = require("zod");
exports.VagaSchema = zod_1.z.object({
    nome: zod_1.z.string().min(2),
    outrosrequisitos: zod_1.z.string().min(14).max(100),
    tipodevaga: zod_1.z.string(),
    especificacao: zod_1.z.string().min(2),
    descricao: zod_1.z.string().max(2000).optional(),
    salario: zod_1.z.coerce.number().optional(),
});
exports.VagaId = zod_1.z.object({
    id: zod_1.z.string().min(5)
});
