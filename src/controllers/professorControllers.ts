import { Request, Response } from "express";
import { allProfessors } from "../repositories/professorsRepositories";

async function listProfessors(req: Request, res: Response){
    try{
        const subject = await allProfessors();
        res.send(subject);
      }
      catch(e){
        console.log(e);
        res.sendStatus(500);
      }
}

export { listProfessors };