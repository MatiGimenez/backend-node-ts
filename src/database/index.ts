import { createConnection } from "typeorm";
import {CONFIG} from '../config'

export default createConnection({
	type: "mariadb",
	host: CONFIG.DB_HOST,
	port: CONFIG.DB_PORT,
	username: CONFIG.DB_USER,
	password: CONFIG.DB_PASS,
	database: CONFIG.DB_NAME,
	entities: [process.cwd() + "/src/models/*.ts"],
	synchronize: true
});
