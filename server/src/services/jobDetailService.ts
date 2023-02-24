import {JobDetail} from "../models/jobDetail"
import {AppDataSource} from "../data-source";

class JobDetailServices {
    private jobDetailRepository

    constructor() {
        this.jobDetailRepository = AppDataSource.getRepository(JobDetail)
    }

    getAll = async () => {
        let sql = `select * from job_detail`
        let jobs = await this.jobDetailRepository.query(sql)
        return jobs;
    }

    save = async (jobDetail) => {
        return this.jobDetailRepository.save(jobDetail)
    }
    remove = async (id)=>{
        let postDetail = await this.jobDetailRepository.findOneBy({postId:id});
        if(!postDetail){
            return null;
        }
        return this.jobDetailRepository.delete({postId: id});
    }
}
export default new JobDetailServices();