import { getRepository } from "typeorm";
import Professor from "../entities/professor";
import Tests from "../entities/test";
import Type from "../entities/types";

async function allProfessors(){
    const professor = await getRepository(Professor).find();
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
    const test = await getRepository(Type).find({
        where: {
            professorId: id
        },
        relations: ["tests"]
    });
    return test;
}

export { allProfessors, findTesteByProfessorId };