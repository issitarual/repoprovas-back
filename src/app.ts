/* import "reflect-metadata";
import connectDatabase from "./database"; */
import express from "express";
import cors from "cors";
import connection from "./database";
import subject from "./controllers/subjectControlers";

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

export default app;
/* export async function init () {
  await connectDatabase();
}  */