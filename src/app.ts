import express, { Application } from "express";
import AuthRoutes from "./routes/auth.routes";

const app: Application = express();

app.use(express.json());

app.use("/", AuthRoutes.router);
app.get("/", (req, res) => {
	res.send("The sedulous hyena ate the antelope!");
});

export default app;
