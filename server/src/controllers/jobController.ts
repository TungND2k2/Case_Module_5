import {Request, Response} from 'express';
import jobServices from "../services/jobService";

class JobController {
    private jobServices

    constructor() {
        this.jobServices = jobServices;
    }

    getAll = async (req: Request, res: Response) => {
        try {
            let job = await jobServices.getAll()
            res.status(200).json(job)
        } catch (e) {
            res.status(500).json(e.message)
        }

    }
}
export default new JobController()
