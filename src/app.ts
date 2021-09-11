import express, { Application } from "express";

const app: Application = express();

app.get("/", (req, res) => {
  res.send("The sedulous hyena ate the antelope!");
});

export default app;
