import { AppDataSource } from "../../data-source";
import Vaga from "../entities/Vaga";

export const VagaRepositorio = AppDataSource.getRepository(Vaga);