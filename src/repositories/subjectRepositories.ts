import { getRepository } from "typeorm";
import Semester from "../entities/semester";

async function allSubjects(){
    const subject = await getRepository(Semester).find({
        relations: ["Subject"]
    });
    return subject;
}

export { allSubjects };