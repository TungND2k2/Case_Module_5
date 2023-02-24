"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const job_1 = require("../models/job");
class JobServices {
    constructor() {
        this.getAll = async () => {
            let jobs = await this.jobRepository.find();
            return jobs;
        };
        this.jobRepository = data_source_1.AppDataSource.getRepository(job_1.Job);
    }
}
exports.default = new JobServices();
//# sourceMappingURL=jobService.js.map