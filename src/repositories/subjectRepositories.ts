import { getRepository } from "typeorm";
import Semester from "../entities/semester";
import Tests from "../entities/test";
import Type from "../entities/types";

async function allSubjects(){
    const subject = await getRepository(Semester).find({
        relations: ["subject"]
    });
    return subject;
}

async function findTesteBySubjectId(id:number) {
    const test = await getRepository(Type).find({
        where: {
            subjectId: `${id}`
        },
        relations: ["tests"]
    });
    return test;
}

export { allSubjects, findTesteBySubjectId };