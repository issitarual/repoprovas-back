import { getRepository } from "typeorm";

import Subject from "../entities/subject";
import Professor from "../entities/professor";

async function allSubjects(){
    const subject = await getRepository(Subject).find({
        select: ["id", "name"]
      });
      
      return subject;
}

async function findProfessorBySubject(id: number){
    const professor = await getRepository(Professor).find({
        select: ["id", "name", "subjectId"],
        where: {subjectId: id}
      });
      
      return professor;
}

export { allSubjects, findProfessorBySubject };