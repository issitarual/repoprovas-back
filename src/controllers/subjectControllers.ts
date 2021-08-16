import { Request, Response } from "express";
import { allSubjects, findTesteBySubjectId } from "../services/subjectServices";

async function listSubject(req: Request, res: Response) {
  try {
    const subject = await allSubjects();
    res.send(subject);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}

async function findSubjectTests(req: Request, res: Response) {
  const { id } = req.params;
  if (!id) return res.sendStatus(404);
  try {
    const tests = await findTesteBySubjectId(parseInt(id));
    if (!tests) return res.sendStatus(400);
    else return res.send(tests);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
}

export { listSubject, findSubjectTests };
