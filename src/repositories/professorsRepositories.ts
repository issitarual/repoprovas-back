import { getRepository } from "typeorm";
import Professor from "../entities/professor";

async function allProfessors(){
    const professor = await getRepository(Professor).find();
      
    return professor;
}

export { allProfessors };