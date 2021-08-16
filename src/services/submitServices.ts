import { getRepository } from "typeorm";

import Subject from "../entities/subject";
import Professor from "../entities/professor";
import Type from "../entities/types";
import Tests from "../entities/test";

import CreateTest from "../controllers/submitControlers";

import { submitSchema } from "../schemas/submitSchemas";
import { idSchema } from "../schemas/idSechemas";

async function allSubjects() {
  const subject = await getRepository(Subject).find({
    select: ["id", "name"],
  });

  return subject;
}

async function findProfessorBySubject(id: number) {
  const value = idSchema.validate({
    id: id,
  });
  if (value.error) return false;

  const professor = await getRepository(Professor).find({
    select: ["id", "name", "subjectId"],
    where: { subjectId: id },
  });
  return professor;
}

async function testTypes() {
  const type = await getRepository(Type).find({
    select: ["id", "name"],
  });

  return type;
}

async function addTest(data: CreateTest) {
  const { name, url, subjectId, typeId, professorId } = data;
  const value = submitSchema.validate({
    name: name,
    url: url,
    subjectId: subjectId,
    typeId: typeId,
    professorId: professorId,
  });
  if (value.error) {
    console.log(value.error);
    return false;
  } else {
    await getRepository(Tests).insert(data);
    return true;
  }
}

export { allSubjects, findProfessorBySubject, testTypes, addTest };
