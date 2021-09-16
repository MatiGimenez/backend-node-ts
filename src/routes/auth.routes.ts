import { Router } from "express";
import { AuthenticationController } from "../controllers/auth.controller";

const router: Router = Router();

router.post("login", AuthenticationController);
