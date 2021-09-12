import { UserDTO, UserLogin } from "./../models/dtos/user";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories";
import Validator from "validator";
import { User } from "../models/User";
import { AuthenticationHelper } from "./helpers/auth.helper";
import { IAuthenticationService } from "./interfaces/IAuthenticationService";

export class AuthenticationService implements IAuthenticationService {
	private userRepository: UserRepository;

	constructor() {
		this.userRepository = getCustomRepository(UserRepository);
	}

	register(user: UserDTO): Promise<any> {
		throw new Error("Method not implemented.");
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
