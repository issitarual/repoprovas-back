import { Request, Response } from "express";
import allSubjects from "../repositories/subjectRepositories";

export default async function subject(req: Request, res: Response){
    try{
        const subject = await allSubjects
        res.send("ok")
      }
      catch(e){
        console.log(e);
        res.sendStatus(500);
      }
}