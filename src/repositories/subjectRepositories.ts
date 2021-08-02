import { getRepository } from "typeorm";
import Semester from "../entities/semester";
import Tests from "../entities/test";

import { idSchema } from "../schemas/idSechemas";

async function allSubjects(){
    const subject = await getRepository(Semester).find({
        relations: ["subject"]
    });
    return subject;
}

async function findTesteBySubjectId(id:number) {
    const value = idSchema.validate({
        id:id
    })
    if(value.error)return false;
    
    const test = await getRepository(Tests).find({
        where: {
            subjectId: `${id}`
        },
        relations: ["type", "professor", "subject"]
    });
    return test;
}

export { allSubjects, findTesteBySubjectId };