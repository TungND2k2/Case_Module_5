import {AppDataSource} from "../data-source";

import {JobDetail} from "../models/jobDetail";

class JobDetailService {
    private jobDetailRepository

    constructor() {
        this.jobDetailRepository = AppDataSource.getRepository(JobDetail)
    }
    getAll = async ()=>{
        let sql = `select * from job_detail`;
        let jobDetails = await this.jobDetailRepository.query(sql);
        if (!jobDetails) {
            return 'No job found'
        }
        return jobDetails;
    }
    save = async (jobDetail) => {
        return   this.jobDetailRepository.save(jobDetail)
    }
    removeJobDetail = async (idJobDetails) => {
        let jobDetails = await this.jobDetailRepository.findOneBy({idJobDetails : idJobDetails});
        if(! jobDetails){
            return null
        }
        return this.jobDetailRepository.delete({idJobDetails : idJobDetails});
    }

}
export default new JobDetailService();
