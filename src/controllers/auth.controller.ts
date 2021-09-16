import { UserDTO } from "./../models/dtos/user";
import { Request, Response } from "express";
import { UserLogin } from "../models/dtos/user";
import { AuthenticationService } from "../services";

export class AuthenticationController {
	private authService: AuthenticationService;

	constructor() {
		this.authService = new AuthenticationService();

		this.login = this.login.bind(this);
		this.register = this.register.bind(this);
	}

	public async login(req: Request, res: Response): Promise<any> {
		const { username, password }: UserLogin = req.body;
		//TODO: validar datos
		try {
			const response: any = await this.authService.login({
				username,
				password
			});
			console.log(response);
		} catch (error) {
			console.log(error);
		}
		console.log("HERE");
		return res.status(201).end();
	}

	public async register(req: Request, res: Response): Promise<any> {
		const { username, password, birthDate, email }: UserDTO = req.body;
		//TODO: validar datos
		const response: any = await this.authService.register({
			username,
			password,
			birthDate,
			email
		});
		return res.status(200).end();
	}
}
