import { AbstractRepository, EntityRepository } from "typeorm";
import { User } from "../models/User";

@EntityRepository(User)
export class UserRepository extends AbstractRepository<User> {
	async createAndSave(user: User): Promise<User> {
		return await this.manager.save(user);
	}

	async findByUsername(username: string): Promise<User | undefined> {
		return await this.repository.findOne({ username });
	}

	async findByEmail(email: string): Promise<User | undefined> {
		return await this.repository.findOne({ email });
	}
}
