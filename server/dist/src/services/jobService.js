"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const job_1 = require("../models/job");
class JobService {
    constructor() {
        this.getAll = async () => {
            let sql = `select * from job`;
            let jobs = await this.jobRepository.query(sql);
            if (!jobs) {
                return 'No job found';
            }
            return jobs;
        };
        this.save = async (job) => {
            return this.jobRepository.save(job);
        };
        this.removeJob = async (idJob) => {
            let jobs = await this.jobRepository.findOneBy({ idJos: idJob });
            if (!jobs) {
                return null;
            }
            return this.jobRepository.delete({ idJob: idJob });
        };
        this.jobRepository = data_source_1.AppDataSource.getRepository(job_1.Job);
    }
}
exports.default = new JobService();
//# sourceMappingURL=jobService.js.map