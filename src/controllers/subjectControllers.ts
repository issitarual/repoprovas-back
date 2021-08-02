import { Request, Response } from "express";
import { allSubjects, findTesteBySubjectId } from "../repositories/subjectRepositories";

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

async function findSubjectTests(req: Request, res: Response){
    const {id}: {id: number} = req.body;
    try{
      const tests = await findTesteBySubjectId(id);
      res.send(tests);
    }
    catch(e){
      console.log(e);
      res.sendStatus(500);
    }
}

export { listSubject, findSubjectTests };

