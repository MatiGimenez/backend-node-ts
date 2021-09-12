import { AbstractRepository, EntityRepository } from "typeorm";
import { User } from "../models/User";
import { IUserRepository } from "./interfaces/IUserRepository";

@EntityRepository(User)
export class UserRepository
	extends AbstractRepository<User>
	implements IUserRepository
{
	exists(t: User): Promise<boolean> {
		throw new Error("Method not implemented.");
	}

	delete(t: User): Promise<any> {
		throw new Error("Method not implemented.");
	}

	async save(t: User): Promise<any> {
		try {
			return await this.manager.save(t);
		} catch (error) {
			console.log(error);
			throw new Error(error);
		}
	}

	async findByUsername(username: string): Promise<User | undefined> {
		return await this.repository.findOne({ username });
	}

	async findByEmail(email: string): Promise<User | undefined> {
		return await this.repository.findOne({ email });
	}
}
