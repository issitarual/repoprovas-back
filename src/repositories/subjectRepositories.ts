import { getRepository } from "typeorm";

import Subject from "../entities/subject";

export default async function allSubjects(){
    const subject = await getRepository(Subject).find({
        select: ["id", "name"]
      });
      
      return subject;
}