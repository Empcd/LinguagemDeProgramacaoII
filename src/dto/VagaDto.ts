import { z } from "zod";

export interface VagaDto {
    id: string;
    nome: string;
    cnpj: string;
    endereco: string;
    cidade: string;
    uf: string;
    descricao: string;
    salario: number;
    telefone: string;
    email: string;
}

export const VagaSchema = z.object({
    nome: z.string().min(2),
    cnpj: z.string().min(14).max(18),
    endereco: z.string(),
    cidade: z.string().min(2),
    uf: z.string().min(2).max(2),
    descricao: z.string().max(2000).optional(),
    salario: z.coerce.number().optional(),
    telefone: z.string().min(10).max(15),
    email: z.string()
})

export const VagaId = z.object({
    id: z.string().min(6)
})