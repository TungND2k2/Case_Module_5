"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const jobDetail_1 = require("../models/jobDetail");
class JobDetailService {
    constructor() {
        this.getAll = async () => {
            let sql = `select * from job_detail`;
            let jobDetails = await this.jobDetailRepository.query(sql);
            if (!jobDetails) {
                return 'No job found';
            }
            return jobDetails;
        };
        this.save = async (jobDetail) => {
            return this.jobDetailRepository.save(jobDetail);
        };
        this.edit = async (jobDetail) => {
            return this.jobDetailRepository.save(jobDetail);
        };
        this.update = async (id) => {
            let jobDetail = await this.jobDetailRepository.findBy({ postId: id });
            if (!jobDetail) {
                return null;
            }
            return await this.jobDetailRepository.delete({ postId: id });
        };
        this.removeJobDetail = async (idJobDetails) => {
            let jobDetails = await this.jobDetailRepository.findOneBy({ id: idJobDetails });
            if (!jobDetails) {
                return null;
            }
            return this.jobDetailRepository.delete({ id: idJobDetails });
        };
        this.jobDetailRepository = data_source_1.AppDataSource.getRepository(jobDetail_1.JobDetail);
    }
}
exports.default = new JobDetailService();
//# sourceMappingURL=jobDetailService.js.map