import { getRepository } from "typeorm";
import Subject from "../entities/subject";

async function allSubjects(){
    const subject = await getRepository(Subject).find({
        relations: ["semester"]
    });
    return subject;
}

export { allSubjects };