"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jobDetail_1 = require("../models/jobDetail");
const data_source_1 = require("../data-source");
class JobDetailServices {
    constructor() {
        this.getAll = async () => {
            let sql = `select * from job_detail`;
            let jobs = await this.jobDetailRepository.query(sql);
            return jobs;
        };
        this.save = async (jobDetail) => {
            return this.jobDetailRepository.save(jobDetail);
        };
        this.remove = async (id) => {
            let postDetail = await this.jobDetailRepository.findOneBy({ postId: id });
            if (!postDetail) {
                return null;
            }
            return this.jobDetailRepository.delete({ postId: id });
        };
        this.jobDetailRepository = data_source_1.AppDataSource.getRepository(jobDetail_1.JobDetail);
    }
}
exports.default = new JobDetailServices();
//# sourceMappingURL=jobDetailService.js.map