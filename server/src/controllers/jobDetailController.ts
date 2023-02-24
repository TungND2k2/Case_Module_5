import jobDetailService from "../services/jobDetailService";
import {Request, Response} from "express";

class JobDetailController {
    private jobDetailService

    constructor() {
        this.jobDetailService = jobDetailService;
    }
    getAllJobDetail = async (req: Request, res: Response)=>{
        try{
            let jobDetails = await jobDetailService.getAll()
            res.status(200).json(jobDetails)
        }catch (e) {
            res.status(500).json(e.message)
        }

    }
    createJobDetail= async (req: Request, res: Response) => {
        try {
            let jobDetails = await jobDetailService.save(req.body);
            res.status(200).json(jobDetails)
        } catch (e) {
            res.status(500).json(e.message)
        }

    }

    deleteJobDetail = async (req: Request, res: Response)=> {
        try {
            let idJobDetail = req.params.idJobDetail;
            let jobDetails = await this.jobDetailService.removeJobDetail(idJobDetail);
            res.status(200).json(jobDetails)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
}
export default new JobDetailController();