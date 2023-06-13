import { Request, Response, NextFunction } from "express";
import VagaService from "../services/vaga.service";

class VagaController {
    private static instance: VagaController;
    private constructor(){

    }

    public static getInstance(): VagaController {
        if(!VagaController.instance){
            VagaController.instance = new VagaController();
        }
        return VagaController.instance;
    }

    public async criarVaga(req: Request,res: Response){
        try {
            const vagaDto = req.body;
            const vagaSalva = await VagaService.getInstance().criarVaga(vagaDto);
            res.json(vagaSalva);
        } catch(error) {
            res.status(500).json(error);
        }
    }

    public async lerTodasVagas(req: Request, res: Response){
        const vagas = await VagaService.getInstance().lerTodasVagas;
        res.json(vagas);
    }

    public async lerVagaPorId(req: Request, res: Response){
        try {
            const id = req.params.id;
            const vaga = await VagaService.getInstance().lerVagaPorId(id);
            res.json(vaga);
        } catch(error){
            res.status(500).send(error)
        }
    }
}

export default VagaController;
