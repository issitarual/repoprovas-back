import { Request, Response } from "express";
import { allProfessors, findTesteByProfessorId } from "../repositories/professorsRepositories";

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

async function findProfessorTests(req: Request, res: Response){
    const { id }: {id: string} = req.body;
    try{
      const tests = await findTesteByProfessorId(parseInt(id));
      res.send(tests);
    }
    catch(e){
      console.log(e);
      res.sendStatus(500);
    }
}

export { listProfessors, findProfessorTests };