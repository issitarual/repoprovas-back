import { Request, Response } from "express";
import { addTest, allSubjects, findProfessorBySubject, types } from "../repositories/submitRepositories";

export default interface CreateTest {
  name: string;
  url: string;
  subjectId: number;
  typeId: number;
  professorId: number;
}

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

async function type(req: Request, res: Response){
    try{
        const allTypes = await types();
        res.send(allTypes);
      }
      catch(e){
        console.log(e);
        res.sendStatus(500);
      }
}

async function test(req: Request, res: Response){
  const { name, url, professorId, typeId, subjectId }: CreateTest = req.body;
  if(!name || !url || !professorId || !typeId || !subjectId) return res.sendStatus(404);
  const data = {name, url, professorId, typeId, subjectId}
  try{
      await addTest(data);
      res.send(201);
    }
    catch(e){
      console.log(e);
      res.sendStatus(500);
    }
}

export { professorBySubject, subject, type };