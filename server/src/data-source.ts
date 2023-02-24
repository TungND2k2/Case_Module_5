import "reflect-metadata"
import { DataSource } from "typeorm";
import {Post} from "./models/post";
import {JobDetail} from "./models/jobDetail";
import {User} from "./models/user";
import {Employer} from "./models/employer";
import {Job} from "./models/job";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "case-md5",
    synchronize: true,
    entities: [Post,JobDetail,User,Employer,Job]
})
