import "reflect-metadata";
import { CONFIG } from "./src/config";
import connection from "./src/database";

const PORT: number = 3000;

const setUpServer = async (): Promise<void> => {
	connection
		.then(() => {
			console.log(`Connected to database successfully at ${CONFIG.DB_HOST}`);
			import("./src/app").then((module) =>
				module.default.listen(PORT, () => {
					console.log(`Server now running on localhost:${PORT}`);
				})
			);
		})
		.catch((error) => console.error(`Couldn't start the app: ${error}`));
};

setUpServer();
