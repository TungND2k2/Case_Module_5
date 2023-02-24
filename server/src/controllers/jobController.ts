import jobService from "../services/jobService";
import {Request, Response} from "express";

class JobController {
    private jobService

    constructor() {
        this.jobService = jobService;
    }
    getAllJob = async (req: Request, res: Response)=>{
        try{
            let jobs = await jobService.getAll()
            res.status(200).json(jobs)
        }catch (e) {
            res.status(500).json(e.message)
        }

    }
    createJob = async (req: Request, res: Response) => {
        try {
            let jobs = await jobService.save(req.body);
            res.status(200).json(jobs)
        } catch (e) {
            res.status(500).json(e.message)
        }

    }

    deleteJob = async (req: Request, res: Response)=> {
        try {
            let idJob = req.params.idJob;
            let jobs = await this.jobService.removeJob(idJob);
            res.status(200).json(jobs)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

}
export default new JobController()
