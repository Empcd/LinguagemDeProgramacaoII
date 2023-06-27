import { z } from "zod";

export interface VagaDto {
    id: string;
    nome: string;
    outrosrequisitos: string;
    tipodevaga: string;
    especificacao: string;
    descricao: string;
    salario: number;
}

export const VagaSchema = z.object({
    nome: z.string().min(2),
    outrosrequisitos: z.string().min(14).max(100),
    tipodevaga: z.string(),
    especificacao: z.string().min(2),
    descricao: z.string().max(2000).optional(),
    salario: z.coerce.number().optional(),
})

export const VagaId = z.object({
    id: z.string().min(5)
})