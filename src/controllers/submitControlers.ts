import { Request, Response } from "express";
import {
  addTest,
  allSubjects,
  findProfessorBySubject,
  testTypes,
} from "../services/submitServices";

export default interface CreateTest {
  name: string;
  url: string;
  subjectId: number;
  typeId: number;
  professorId: number;
}

async function subject(req: Request, res: Response) {
  try {
    const subject = await allSubjects();
    res.send(subject);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}

async function professorBySubject(req: Request, res: Response) {
  const { id } = req.params;
  if (!id || !parseInt(id)) return res.sendStatus(404);
  try {
    const professor = await findProfessorBySubject(parseInt(id));
    if (!professor) return res.sendStatus(400);
    else return res.send(professor);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}

async function type(req: Request, res: Response) {
  try {
    const allTypes = await testTypes();
    res.send(allTypes);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}

async function newTest(req: Request, res: Response) {
  const { name, url, professorId, typeId, subjectId }: CreateTest = req.body;

  const isNewTestAvailable =
    !name || !url || !professorId || !typeId || !subjectId;
  if (isNewTestAvailable) return res.sendStatus(404);

  const data = { name, url, professorId, typeId, subjectId };

  try {
    const newTest = await addTest(data);
    if (!newTest) return res.sendStatus(400);
    else return res.send(201);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}

export { professorBySubject, subject, type, newTest };
