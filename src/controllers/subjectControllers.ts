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
    const {id} = req.params;
    try{
      const tests = await findTesteBySubjectId(parseInt(id));
      res.send(tests);
    }
    catch(e){
      console.log(e);
      res.sendStatus(500);
    }
}

export { listSubject, findSubjectTests };

