import {AppDataSource} from "../data-source";

import {Job} from "../models/job";

class JobService {
    private jobRepository

    constructor() {
        this.jobRepository = AppDataSource.getRepository(Job)
    }
    getAll = async ()=>{
        let sql = `select * from job`;
        let jobs = await this.jobRepository.query(sql);
        if (!jobs) {
            return 'No job found'
        }
        return jobs;
    }
    save = async (job) => {
        return   this.jobRepository.save(job)
    }
    removeJob = async (idJob) => {
        let jobs = await this.jobRepository.findOneBy({idJos : idJob});
        if(!jobs){
            return null
        }
        return this.jobRepository.delete({idJob : idJob});
    }

}
export default new JobService();