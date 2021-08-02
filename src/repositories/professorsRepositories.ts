import { getRepository } from "typeorm";
import Professor from "../entities/professor";
import Tests from "../entities/test";

import { idSchema } from "../schemas/idSechemas";

async function allProfessors(){
    const professor = await getRepository(Professor).find({
        relations: ["tests"]
    });
    let object: any = {};
    let removeDuplicate = [];
    for (let i = 0; i < professor.length; i++) {
        let item = professor[i];
        if (!object[item.name]) {
            object[item.name] = true;
            removeDuplicate.push(item);
        }
    }
    return removeDuplicate;
}

async function findTesteByProfessorId(id:number) {
    const value = idSchema.validate({
        id:id
    })
    if(value.error)return false;
    
    const test = await getRepository(Tests).find({
        where: {
            professorId: id
        },
        relations: ["type", "subject", "professor"]
    });
    return test;
}

export { allProfessors, findTesteByProfessorId };