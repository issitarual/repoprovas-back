import { Request, Response } from "express";
import { getRepository } from "typeorm";

import Subject from "../entities/subject";

export default async function allSubjects(req: Request, res: Response){
    const subject = await getRepository(Subject).find({
        select: ["id", "name"]
      });
      
      return subject;
}