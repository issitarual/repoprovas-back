import "./setup";

import express from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database";

import { subject, professorBySubject, type, newTest } from "./controllers/submitControlers"
import { listProfessors } from "./controllers/professorControllers";

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
app.get("/submit/subject/:id", professorBySubject);
app.get("/submit/types", type);
app.post("/submit", newTest);

app.get("/professor", listProfessors);

export async function init () {
  await connectDatabase();
}

export default app;