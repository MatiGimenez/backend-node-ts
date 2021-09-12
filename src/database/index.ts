import { createConnection } from "typeorm";

export default createConnection({
	type: "mariadb",
	host: "localhost",
	port: 3306,
	username: "root",
	password: "admin",
	database: "test",
	entities: [process.cwd() + "/src/models/*.ts"],
	synchronize: true
});
