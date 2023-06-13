"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VagaId = exports.VagaSchema = void 0;
const zod_1 = require("zod");
exports.VagaSchema = zod_1.z.object({
    nome: zod_1.z.string().min(2),
    cnpj: zod_1.z.string().min(14).max(18),
    endereco: zod_1.z.string(),
    cidade: zod_1.z.string().min(2),
    uf: zod_1.z.string().min(2).max(2),
    descricao: zod_1.z.string().max(2000).optional(),
    salario: zod_1.z.coerce.number().optional(),
    telefone: zod_1.z.string().min(10).max(15),
    email: zod_1.z.string()
});
exports.VagaId = zod_1.z.object({
    id: zod_1.z.string().min(6)
});
