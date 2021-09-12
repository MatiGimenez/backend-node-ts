import Crypto from "crypto";

export class AuthenticationHelper {
	public static isValidPassword(
		password: string,
		decodedOne: string,
		salt: string
	): boolean {
		const hashedPassword: string = Crypto.createHash("sha256")
			.update(password)
			.digest("hex");
		const hashedSalt: string = Crypto.createHash("sha256")
			.update(salt)
			.digest("hex");
		const result: string = Crypto.createHash("sha256")
			.update(hashedPassword)
			.update(hashedSalt)
			.digest("hex");

		return result === decodedOne;
	}
}
