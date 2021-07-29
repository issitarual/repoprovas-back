import { Request, Response } from "express";
import { allProfessors } from "../repositories/professorsRepositories";

async function listProfessors(req: Request, res: Response){
    try{
        const professor = await allProfessors();
        res.send(professor);
      }
      catch(e){
        console.log(e);
        res.sendStatus(500);
      }
}

export { listProfessors };