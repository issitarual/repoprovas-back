import { Request, Response } from "express";
import { allSubjects, findProfessorBySubject } from "../repositories/subjectRepositories";

async function subject(req: Request, res: Response){
    try{
        const subject = await allSubjects();
        res.send(subject);
      }
      catch(e){
        console.log(e);
        res.sendStatus(500);
      }
}

async function professorBySubject(req: Request, res: Response){
    const {id} = req.params;
    if(!id || !parseInt(id)) return res.sendStatus(404);
    try{
        const professor = await findProfessorBySubject(parseInt(id));
        res.send(professor);
      }
      catch(e){
        console.log(e);
        res.sendStatus(500);
      }
}

export { professorBySubject, subject };