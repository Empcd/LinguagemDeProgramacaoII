import { Entity, Column, PrimaryColumn } from "typeorm";

@Entity()
class Vaga {
    @PrimaryColumn({nullable: false})
    id: string;
    @Column({unique: true, nullable: false})
    nome: string;
    @Column({nullable: false})
    cnpj: string;
    @Column()
    endereco: string;
    @Column()
    cidade: string;
    @Column()
    uf: string;
    @Column()
    descricao: string;
    @Column('decimal', { precision: 6, scale: 2, nullable: true})
    salario: number;
    @Column({nullable: false})
    telefone: string;
    @Column({nullable: false})
    email: string;
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