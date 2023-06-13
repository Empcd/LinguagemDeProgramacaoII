import { VagaDto } from "../dto/VagaDto";
import Vaga from "../models/entities/Vaga";
import { VagaRepositorio } from "../models/repositories/Repositório";

class VagaService {
    private static instance: VagaService;
    private constructor(){

    }

    public static getInstance(): VagaService {
        if(!VagaService.instance){
            VagaService.instance = new VagaService();
        }
        return VagaService.instance;
    }

    public async criarVaga(dto: VagaDto): Promise<Vaga> {
        try{
            const vaga = new Vaga();
            vaga.cidade = dto.cidade;
            vaga.cnpj = dto.cnpj;
            vaga.descricao = dto.descricao;
            vaga.email = dto.email;
            vaga.endereco = dto.endereco;
            vaga.id = Math.round(Math.random() * 1E6).toString();
            vaga.nome = dto.nome;
            vaga.salario = dto.salario;
            vaga.telefone = dto.telefone;
            vaga.uf = dto.uf;
            return await VagaRepositorio.save(vaga)
        } catch(err) {
            return Promise.reject(new Error('Não consegui salvar.'));
        }
    }

    public async lerTodasVagas(): Promise<Vaga[]> {
        return await VagaRepositorio.find();
    }

    public async lerVagaPorId(id: string): Promise<Vaga> {
        const vagaSelecionada = await VagaRepositorio.findOneBy({id});
        if(vagaSelecionada){
            return Promise.resolve(vagaSelecionada)
        } else {
            return Promise.reject('Not Found')
        }
    }
}

export default VagaService;
