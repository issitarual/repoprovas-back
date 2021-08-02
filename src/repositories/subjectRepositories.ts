import { getRepository } from "typeorm";
import Semester from "../entities/semester";
import Tests from "../entities/test";

async function allSubjects(){
    const subject = await getRepository(Semester).find({
        relations: ["subject"]
    });
    return subject;
}

async function findTesteBySubjectId(id:number) {
    const test = await getRepository(Tests).find({
        where: {
            subjectId: `${id}`
        },
        relations: ["type", "professor", "subject"]
    });
    return test;
}

export { allSubjects, findTesteBySubjectId };