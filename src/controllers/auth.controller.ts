import { UserDTO } from "./../models/dtos/user";
import { Request, Response } from "express";
import { UserLogin } from "../models/dtos/user";
import { AuthenticationService } from "../services";

export class AuthenticationController {
	authService: AuthenticationService;

	constructor() {
		this.authService = new AuthenticationService();
	}

	public async login(req: Request, res: Response): Promise<any> {
		const { username, password }: UserLogin = req.body;
		//TODO: validar datos
		const response: any = await this.authService.login({ username, password });
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
