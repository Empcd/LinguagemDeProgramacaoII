import 'reflect-metadata'
import { v4 } from "uuid";
import { DeleteResult } from 'typeorm';

import { AppDataSource } from '../../src/data-source';
import VagaService from "../../src/services/vaga.service";
import Vaga from '../../src/models/entities/Vaga';
import { VagaDto } from "../../src/dto/VagaDto";
import { VagaRepositorio } from '../../src/models/repositories/Repositório';

const vagas : Vaga[]=[];

test('criarVaga', async () => {

  VagaRepositorio.find = jest.fn((a: any)=> Promise.resolve(vagas));
  VagaRepositorio.delete = jest.fn((a: any)=> new Promise(resolve => {vagas.splice(0,100); resolve(new DeleteResult()) }));
  VagaRepositorio.save = (data: any)=>{console.log(data); vagas.push(data); return Promise.resolve(data)};
  VagaRepositorio.findOneBy = jest.fn((a: any) => Promise.resolve(vagas[2] || vagas[0]));

  const id1 = v4();

  const vagaDto: VagaDto = {
    id: id1,
    nome: 'Junin',
    outrosrequisitos: 'Com Foco na publicacao digital',
    descricao: 'Analista de Marketing Digital',
    tipodevaga: 'Rua das Flores, 123',
    especificacao: 'São Paulo',
    salario: 5000,
  }
  expect(vagas.length).toBe(0);

  await VagaService.getInstance().criarVaga(vagaDto);

  expect(vagas.length).toBe(1);
  expect(vagas[0].nome).toBe(vagaDto.nome);
});

test('lerTodasVagas', async () => {
  vagas.splice(0,100);
  const id1 = v4();
  const id2 = v4();

  const vagaDto1 = {
    id: id1,
    nome: 'Junin',
    outrosrequisitos: 'Com Foco na publicacao digital',
    descricao: 'Analista de Marketing Digital',
    tipodevaga: 'Rua das Flores, 123',
    especificacao: 'São Paulo',
    salario: 5000,
  }
  const vagaDto2 = {
    id: id2,
    nome: 'Junin',
    outrosrequisitos: 'Com Foco na publicacao digital',
    descricao: 'Analista de Marketing Digital',
    tipodevaga: 'Rua das Flores, 123',
    especificacao: 'São Paulo',
    salario: 5000,
  }
  await VagaRepositorio.save(vagaDto1);
  await VagaRepositorio.save(vagaDto2);
  const vagaService1 = await VagaService.getInstance().lerTodasVagas();

  expect(vagaService1.length).toBe(2);
});
test("lerVagaPorId", async () => {
  vagas.splice(0,100);
  const id1 = v4();
  const id2 = v4();

  const vagaDto1: VagaDto = {
    id: id1,
    nome: 'Junin',
    outrosrequisitos: 'Com Foco na publicacao digital',
    descricao: 'Analista de Marketing Digital',
    tipodevaga: 'Rua das Flores, 123',
    especificacao: 'São Paulo',
    salario: 5000,
  }
  const vagaDto2: VagaDto = {
    id: id2,
    nome: 'Markin',
    outrosrequisitos: 'Com Foco na publicacao digital',
    descricao: 'Analista de Marketing Digital',
    tipodevaga: 'Rua das Flores, 123',
    especificacao: 'São Paulo',
    salario: 5000,
  }

  // Salve as vagas no repositório
  await VagaRepositorio.save(vagaDto1);
  await VagaRepositorio.save(vagaDto2);

  let vagaResultado = await VagaService.getInstance().lerVagaPorId(id1);
  expect((await vagaResultado)?.nome).toBe("Junin");
});
/*
test('lerVagaPorId', async () => {
  const id1 = v4();
  const id2 = v4();
  const id3 = v4();

  const vagaDto1 = {
    id: id1,
    nome: 'Junin',
    outrosrequisitos: 'Com Foco na publicacao digital',
    descricao: 'Analista de Marketing Digital',
    tipodevaga: 'Rua das Flores, 123',
    especificacao: 'São Paulo',
    salario: 5000,
  } as VagaDto;
  const vagaDto2 = {
    id: id2,
    nome: 'Markin',
    outrosrequisitos: 'Com Foco na publicacao digital',
    descricao: 'Analista de Marketing Digital',
    tipodevaga: 'Rua das Flores, 123',
    especificacao: 'São Paulo',
    salario: 5000,
  } as VagaDto;
  const vagaDto3 = {
    id: id3,
    nome: 'Cleitin',
    outrosrequisitos: 'Com Foco na publicacao digital',
    descricao: 'Analista de Marketing Digital',
    tipodevaga: 'Rua das Flores, 123',
    especificacao: 'São Paulo',
    salario: 5000,
  } as VagaDto;

  VagaRepositorio.save(vagaDto1);
  VagaRepositorio.save(vagaDto2);
  VagaRepositorio.save(vagaDto3);

  let VagaSelecionadoPorId = VagaService.getInstance().lerVagaPorId(id1);

  VagaSelecionadoPorId = VagaService.getInstance().lerVagaPorId(id1)
  expect((await VagaSelecionadoPorId)?.nome).toBe("Junin")
  VagaSelecionadoPorId = VagaService.getInstance().lerVagaPorId(id2)
  expect((await VagaSelecionadoPorId)?.nome).toBe("Markin")
  VagaSelecionadoPorId = VagaService.getInstance().lerVagaPorId(id3)
  expect((await VagaSelecionadoPorId)?.nome).toBe("Cleitin")



});*/
/*  const vagaService = VagaService.getInstance();
  const vaga = await vagaService.lerVagaPorId('100000');

  expect(vaga).toBeInstanceOf(Vaga);*/
