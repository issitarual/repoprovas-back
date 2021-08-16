import { Request, Response } from "express";
import Professor from "../entities/professor";
import Tests from "../entities/test";
import {
  allProfessors,
  findTesteByProfessorId,
} from "../services/professorsServices";

async function listProfessors(req: Request, res: Response) {
  try {
    const professor: Professor[] = await allProfessors();
    res.send(professor);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}

async function findProfessorTests(req: Request, res: Response) {
  const { id } = req.params;
  if (!id) return res.sendStatus(404);
  try {
    const tests: false | Tests[] = await findTesteByProfessorId(parseInt(id));
    if (!tests) return res.sendStatus(400);
    else return res.send(tests);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}

export { listProfessors, findProfessorTests };
