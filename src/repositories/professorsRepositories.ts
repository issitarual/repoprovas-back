import { getRepository } from "typeorm";
import Professor from "../entities/professor";

async function allProfessors(id: number){
    const professor = await getRepository(Professor).find({
        select: ["id", "name", "subjectId"],
      });
      
      return professor;
}

export { allProfessors };