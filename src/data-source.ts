import { DataSource } from "typeorm";
import Vaga from "./models/entities/Vaga";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234",
    database: "empcd",
    synchronize: true,
    logging: true,
    entities: [Vaga],
    subscribers: [],
    migrations: []
});