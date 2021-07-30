import { Request, Response } from "express";
import { allSubjects } from "../repositories/subjectRepositories";

async function listSubject(req: Request, res: Response){
    try{
        const subject = await allSubjects();
        res.send(subject);
      }
      catch(e){
        console.log(e);
        res.sendStatus(500);
      }
}

export { listSubject };

