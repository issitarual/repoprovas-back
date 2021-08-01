import { getRepository } from "typeorm";
import Professor from "../entities/professor";

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

export { allProfessors };