import "reflect-metadata"
import { DataSource } from "typeorm"
import {Job} from "./models/job";
import {Employer} from "./models/employer";
import {User} from "./models/user";
import {Post} from "./models/post";
import {JobDetail} from "./models/jobDetail";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "case-md5",
    synchronize: true,
    logging: false,
    entities: [Job,Employer,User,Post,JobDetail],
    migrations: ["dist/src/migrations/*.js"],
})