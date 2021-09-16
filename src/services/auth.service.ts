import { UserDTO, UserLogin } from "./../models/dtos/user";
import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories";
import Validator from "validator";
import { User } from "../models/User";
import { AuthenticationHelper } from "./helpers/auth.helper";
import { IAuthenticationService } from "./interfaces/IAuthenticationService";
import { UserMapper } from "../mappers/user.mapper";

export class AuthenticationService implements IAuthenticationService {
	private userRepository: UserRepository;
	private mapper: UserMapper;

	constructor() {
		this.userRepository = getCustomRepository(UserRepository);
		this.mapper = new UserMapper();
	}

	async register(user: UserDTO): Promise<any> {
		//TODO: validar datos
		const exists: boolean = await this.userRepository.exists({
			username: user.username,
			email: user.email
		} as User);

		if (exists) {
			throw new Error("User already exists");
		}

		this.userRepository.save(this.mapper.toEntity(user));
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
