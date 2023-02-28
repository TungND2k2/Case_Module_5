"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const job_1 = require("./models/job");
const employer_1 = require("./models/employer");
const user_1 = require("./models/user");
const post_1 = require("./models/post");
const jobDetail_1 = require("./models/jobDetail");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "case-md5",
    synchronize: true,
    logging: false,
    entities: [job_1.Job, employer_1.Employer, user_1.User, post_1.Post, jobDetail_1.JobDetail],
    migrations: ["dist/src/migrations/*.js"],
});
//# sourceMappingURL=data-source.js.map
