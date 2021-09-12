import { UserLogin, UserDTO } from "./../../models/dtos/user";

export interface IAuthenticationService {
	login({ username, password }: UserLogin): Promise<any>;
	register(user: UserDTO): Promise<any>;
}
