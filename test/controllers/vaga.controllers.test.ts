import { Request, Response } from "express";
import VagaService from "../../src/services/vaga.service";
import VagaController from "../../src/controllers/vaga.controller";

test('criarVaga', async () => {
  const vagaDto = {
    cidade: 'São Paulo',
    cnpj: '12.345.678/0001-90',
    descricao: 'Analista de Marketing Digital',
    email: 'recrutamento@empresaexemplo.com',
    endereco: 'Rua das Flores, 123',
    nome: 'Junin',
    salario: 5000,
    telefone: '(11)98765-4321',
    uf: 'SP',
  };

  const req = {
    body: vagaDto,
  } as Request;

  const res = {
    json: jest.fn(),
    status: jest.fn().mockReturnThis(),
  } as unknown as Response;

  await VagaController.getInstance().criarVaga(req, res);

  expect(res.status).toHaveBeenCalledWith(200);
  expect(res.json).toHaveBeenCalled();
});

test('lerTodasVagas', async () => {
  const req = {} as Request;

  const res = {
    json: jest.fn(),
  } as unknown as Response;

  await VagaController.getInstance().lerTodasVagas(req, res);

  expect(res.json).toHaveBeenCalled();
});

test('lerVagaPorId', async () => {
const id = '100000';
  
const req = {
    params: { id },
} as unknown as Request;
  
const res = {
    json: jest.fn(),
    status: jest.fn().mockReturnThis(),
} as unknown as Response;
  
await VagaController.getInstance().lerVagaPorId(req, res);
  
expect(res.status).toHaveBeenCalledWith(200);
expect(res.json).toHaveBeenCalled();
});