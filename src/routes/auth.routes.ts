import { Router } from "express";
import { AuthenticationController } from "../controllers";

class AuthRouter {
	public router: Router;
	private authController: AuthenticationController;

	constructor() {
		this.router = Router();
		this.authController = new AuthenticationController();

		this.initializeRoutes();
	}

	private initializeRoutes() {
		this.router
			.post("/login", this.authController.login)
			.post("/register", this.authController.register);
	}
}

export default new AuthRouter();
