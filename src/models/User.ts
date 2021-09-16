import Crypto from "crypto";
import {
	BeforeInsert,
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn
} from "typeorm";
import { AuthenticationHelper } from "../services/helpers/auth.helper";

@Entity()
export class User {
	@PrimaryGeneratedColumn("uuid")
	id: string;

	@Column("varchar", { length: 16, unique: true })
	username: string;

	@Column("varchar", { length: 120 })
	password: string;

	@Column("varchar", { length: 120 })
	salt: string;

	@Column("varchar", { length: 120, unique: true })
	email: string;

	@Column("integer", { nullable: true })
	age: number;

	@Column("datetime", { nullable: true })
	birthDate: Date;

	@CreateDateColumn()
	createdAt: Date;

	@UpdateDateColumn()
	updateAt: Date;

	@BeforeInsert()
	encryptPassword() {
		this.salt = Crypto.randomBytes(12).toString("hex");
		this.password = AuthenticationHelper.encryptPassword(
			this.password,
			this.salt
		);
	}
}
