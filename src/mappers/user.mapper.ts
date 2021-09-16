import { UserDTO } from "./../models/dtos/user";
import { User } from "../models/User";
import { Mapper } from "./IMapper";
import { AuthenticationHelper } from "../services/helpers/auth.helper";

export class UserMapper implements Mapper<User> {
	toEntity(raw: UserDTO): User {
		const user: User = new User();
		user.username = raw.username;
		user.password = raw.password;
		user.email = raw.email;
		user.birthDate = new Date(raw.birthDate);
		user.age = AuthenticationHelper.calculateAge(raw.birthDate);
		return user;
	}
	toDTO(t: User): UserDTO {
		throw new Error("Method not implemented.");
	}
}
