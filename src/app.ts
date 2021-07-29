import "./setup";

import express from "express";
import cors from "cors";
import "reflect-metadata";

import connectDatabase from "./database";

import { subject, professorBySubject, type } from "./controllers/subjectControlers";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/test", (req, res) => {
  res.send("OK!");
});
app.get("/", (req, res) => {
  res.send("OK!");
});

app.get("/subject", subject);
app.get("/subject/:id", professorBySubject);
app.get("/types", type);

export async function init () {
  await connectDatabase();
}

export default app;