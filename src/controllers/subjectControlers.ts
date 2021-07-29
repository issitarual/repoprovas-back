import { Request, Response } from "express";
import { allSubjects } from "../services/subjectServices";

export default async function subject(req: Request, res: Response){
    try{
        const subject = await allSubjects();
        res.send(subject);
      }
      catch(e){
        console.log(e);
        res.sendStatus(500);
      }
}