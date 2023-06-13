"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
let Vaga = class Vaga {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ nullable: false }),
    __metadata("design:type", String)
], Vaga.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true, nullable: false }),
    __metadata("design:type", String)
], Vaga.prototype, "nome", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Vaga.prototype, "cnpj", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Vaga.prototype, "endereco", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Vaga.prototype, "cidade", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Vaga.prototype, "uf", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Vaga.prototype, "descricao", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 6, scale: 2, nullable: true }),
    __metadata("design:type", Number)
], Vaga.prototype, "salario", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Vaga.prototype, "telefone", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: false }),
    __metadata("design:type", String)
], Vaga.prototype, "email", void 0);
Vaga = __decorate([
    (0, typeorm_1.Entity)()
], Vaga);
exports.default = Vaga;
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
