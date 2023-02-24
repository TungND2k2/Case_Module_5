import {Request, Response} from "express";
import jobDetailService from "../services/jobDetailService";

class JobDetailController{
    private jobDetailService
    constructor() {
        this.jobDetailService = jobDetailService
    }
    getAll = async (req: Request, res: Response) => {
        try {
            let jobs = await jobDetailService.getAll()
            res.status(200).json(jobs)
        } catch (e) {
            res.status(500).json({
                    message: e.message
                }
            )
        }

    }
    create = async (req: Request, res: Response) => {
        try {
            let jobs = await jobDetailService.save(req.body)
            res.status(200).json(jobs)

        } catch (e) {
            res.status(500).json({
                    message: e.message
                }
            )
        }
    }
}
export default new JobDetailController();