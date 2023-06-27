import 'reflect-metadata'
import { v4 } from "uuid";
import { DeleteResult } from 'typeorm';

import VagaService from "../../src/services/vaga.service";
import Vaga from "../../src/models/entities/Vaga";
import { VagaDto } from "../../src/dto/VagaDto";
import { VagaRepositorio } from '../../src/models/repositories/Repositório';

const vagas : Vaga[]=[];

test('criarVaga', async () => {

  VagaRepositorio.find = jest.fn((a: any)=> Promise.resolve(vagas));
  VagaRepositorio.delete = jest.fn((a: any)=> new Promise(resolve => {vagas.splice(0,100); resolve(new DeleteResult()) }))
  VagaRepositorio.save<any> = (data)=>{console.log(data); vagas.push(data); return Promise.resolve(data)}

  const id1 = v4();

  const vagaDto = {
    id: id1,
    nome: 'Junin',
    outrosrequisitos: '12.345.678/0001-90',
    descricao: 'Analista de Marketing Digital',
    tipodevaga: 'Rua das Flores, 123',
    especificacao: 'São Paulo',
    salario: 5000,
  } as VagaDto;
  expect(vagas.length).toBe(0);

  VagaService.getInstance().criarVaga(vagaDto);

  expect(vagas.length).toBe(1);
  expect(vagas[0].nome).toBe(vagaDto.nome);
});

test('lerTodasVagas', async () => {
  vagas.splice(0,100);
  const id1 = v4();
  const id2 = v4();

  const vagaDto1 = {
    id:id1,
    nome: 'Junin',
    cnpj: '12.345.678/0001-90',
    descricao: 'Analista de Marketing Digital',
    endereco: 'Rua das Flores, 123',
    cidade: 'São Paulo',
    salario: 5000,
  }
  const vagaDto2 = {
    id: id2,
    nome: 'Junin',
    cnpj: '12.345.678/0001-90',
    descricao: 'Analista de Marketing Digital',
    endereco: 'Rua das Flores, 123',
    cidade: 'São Paulo',
    salario: 5000,
  }
  await VagaRepositorio.save(vagaDto1);
  await VagaRepositorio.save(vagaDto2);
  const vagaService1 = await VagaService.getInstance().lerTodasVagas();

  expect(vagaService1.length).toBe(2);
});

test('lerVagaPorId', async () => {
  const id1 = v4();
  const id2 = v4();
  const id3 = v4();

  const vagaDto1 = {
    id: id1,
    nome: 'Junin',
    cnpj: '12.345.678/0001-90',
    descricao: 'Analista de Marketing Digital',
    endereco: 'Rua das Flores, 123',
    cidade: 'São Paulo',
    salario: 5000,
  }
  const vagaDto2 = {
    id: id2,
    nome: 'Junin',
    cnpj: '12.345.678/0001-90',
    descricao: 'Analista de Marketing Digital',
    endereco: 'Rua das Flores, 123',
    cidade: 'São Paulo',
    salario: 5000,
  }
  const vagaDto3 = {
    id: id3,
    nome: 'Junin',
    cnpj: '12.345.678/0001-90',
    descricao: 'Analista de Marketing Digital',
    endereco: 'Rua das Flores, 123',
    cidade: 'São Paulo',
    salario: 5000,
  }

  VagaRepositorio.save(vagaDto1);
  VagaRepositorio.save(vagaDto2);
  VagaRepositorio.save(vagaDto3);

  let VagaSelecionadoPorId = VagaService.getInstance().lerVagaPorId(id1);

  expect((await VagaSelecionadoPorId)?.nome).toBe("Junin")
  VagaSelecionadoPorId = VagaService.getInstance().lerVagaPorId(id1)
  expect((await VagaSelecionadoPorId)?.nome).toBe("Junin")
  VagaSelecionadoPorId = VagaService.getInstance().lerVagaPorId(id2)
  expect((await VagaSelecionadoPorId)?.nome).toBe("Junin")
  VagaSelecionadoPorId = VagaService.getInstance().lerVagaPorId(id3)

/*
  const vagaService = VagaService.getInstance();
  const vaga = await vagaService.lerVagaPorId('100000');

  expect(vaga).toBeInstanceOf(Vaga);
*/
});