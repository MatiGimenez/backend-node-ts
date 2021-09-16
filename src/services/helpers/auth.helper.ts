import Crypto from "crypto";

export class AuthenticationHelper {
	public static encryptPassword(password: string, salt: string): string {
		const hashedPassword: string = Crypto.createHash("sha256")
			.update(password)
			.digest("hex");
		const hashedSalt: string = Crypto.createHash("sha256")
			.update(salt)
			.digest("hex");
		return Crypto.createHash("sha256")
			.update(hashedPassword)
			.update(hashedSalt)
			.digest("hex");
	}

	public static isValidPassword(
		password: string,
		decodedOne: string,
		salt: string
	): boolean {
		return this.encryptPassword(password, salt) === decodedOne;
	}

	public static calculateAge(dateString: string): number {
		const today: Date = new Date();
		const birth: Date = new Date(dateString);
		let age: number = today.getFullYear() - birth.getFullYear();
		const monthDiff: number = today.getMonth() - birth.getMonth();
		if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate()))
			age--;
		return age;
	}
}
