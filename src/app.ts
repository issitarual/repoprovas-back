import "./setup";

import express from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database";

import { subject, professorBySubject, type, newTest } from "./controllers/submitControlers"
import { findProfessorTests, listProfessors } from "./controllers/professorControllers";
import { findSubjectTests, listSubject } from "./controllers/subjectControllers";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/test", (req, res) => {
  res.send("OK!");
});
app.get("/", (req, res) => {
  res.send("OK!");
});

app.get("/submit", subject);
app.get("/submit/subject/:id", professorBySubject); //validação com JOI
app.get("/submit/types", type);
app.post("/submit", newTest); //validação com JOI

app.get("/professor", listProfessors);
app.get("/professor/:id", findProfessorTests); //validação com JOI

app.get("/subject", listSubject);
app.get("/subject/:id", findSubjectTests); //validação com JOI

export async function init () {
  await connectDatabase();
}

export default app;