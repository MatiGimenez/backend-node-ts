import { UserLogin } from "./../models/dtos/user";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories";
import Validator from "validator";
import { User } from "../models/User";
import { AuthenticationHelper } from "./helpers/auth.helper";

export class AuthenticationService {
	private userRepository: UserRepository;

	constructor() {
		this.userRepository = getCustomRepository(UserRepository);
	}

	async login({ username, password }: UserLogin) {
		let user: User;

		const isEmail = Validator.isEmail(username);

		user = isEmail
			? await this.userRepository.findByEmail(username)
			: await this.userRepository.findByUsername(username);

		if (!user) {
			throw new Error("Invalid credentials");
		}
		if (
			!AuthenticationHelper.isValidPassword(password, user.password, user.salt)
		) {
			throw new Error("Invalid credentials");
		}

		//TODO: generate token
	}
}
