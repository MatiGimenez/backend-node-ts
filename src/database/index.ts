import { createConnection } from "typeorm";
console.log(__dirname)

export default createConnection({
    type: "mariadb",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "admin",
    database: "test",
    entities: [
        __dirname + "/entity/*.js"
    ],
    synchronize: true,
})