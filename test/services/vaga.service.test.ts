import { VagaDto } from "../../src/dto/VagaDto";
import Vaga from "../../src/models/entities/Vaga";
import { VagaRepositorio } from "../../src/models/repositories/Repositório";
import VagaService from "../../src/services/vaga.service";

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
  } as VagaDto;

  const vagaService = VagaService.getInstance();
  const novaVaga = await vagaService.criarVaga(vagaDto);

  expect(novaVaga).toBeInstanceOf(Vaga);
});

test('lerTodasVagas', async () => {
  const vagaService = VagaService.getInstance();
  const vagas = await vagaService.lerTodasVagas();

  expect(Array.isArray(vagas)).toBe(true);
});

test('lerVagaPorId', async () => {
  const vagaService = VagaService.getInstance();
  const vaga = await vagaService.lerVagaPorId('100000');

  expect(vaga).toBeInstanceOf(Vaga);
});