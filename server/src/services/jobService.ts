import {AppDataSource} from "../data-source";
import {Job} from "../models/job";

class JobServices {
    private jobRepository

    constructor() {
        this.jobRepository = AppDataSource.getRepository(Job)
    }

    getAll = async () => {
        let jobs = await this.jobRepository.find()
        return jobs;
    }
}

export default new JobServices()