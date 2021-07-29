import { getRepository } from "typeorm";

import Subject from "../entities/subject";
import Professor from "../entities/professor";
import Type from "../entities/types";
import Tests from "../entities/test";

import CreateTest from "../controllers/submitControlers"

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

async function types(){
    const type = await getRepository(Type).find({
        select: ["id", "name"]
      });
      
      return type;
}

async function addTest(data: CreateTest){
  await getRepository(Tests).insert(data);
  }

export { allSubjects, findProfessorBySubject, types, addTest };