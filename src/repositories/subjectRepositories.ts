import { getRepository } from "typeorm";
import Semester from "../entities/semester";
import Subject from "../entities/subject";

async function allSubjects(){
    const subject = await getRepository(Semester).find({
        relations: ["subject"]
    });
    return subject;
}

export { allSubjects };