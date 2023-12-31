import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
class Vaga {
    @PrimaryColumn({nullable: false, length:6})
    id: string;
    @Column({unique: true, nullable: false, length:25})
    nome: string;
    @Column({length:150})
    outrosrequisitos: string;
    @Column({nullable: false})
    tipodevaga: string;
    @Column({nullable: false})
    descricao: string;
    @Column('decimal', { precision: 6, scale: 2, nullable: true})
    salario: number;
    @Column({nullable: false})
    especificacao: string;
}
export default Vaga

/*ID numérico de 100.000 a 1.000.000
Nome da empresa
CNPJ da empresa
Endereço da empresa
Cidade da empresa
uf da empresa
Descrição da vaga
Salário: a negociar
Telefone da empresa
Email da empresa*/