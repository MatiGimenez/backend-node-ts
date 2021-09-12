import { User } from "../../models/User";
import { Repo } from "./Repo";

export interface IUserRepository extends Repo<User> {
	findByUsername(username: string): Promise<User | undefined>;
	findByEmail(email: string): Promise<User | undefined>;
}
