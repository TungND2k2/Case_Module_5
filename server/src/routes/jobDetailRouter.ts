import {Router} from "express";
import jobController from "../controllers/jobController";
import {jobRouter} from "./jobRouter";
import jobDetailController from "../controllers/jobDetailController";


export const jobDetailRouter = Router();
jobDetailRouter.get('/',jobDetailController.getAllJobDetail)
jobDetailRouter.post('/',jobDetailController.createJobDetail)
jobDetailRouter.delete('/:id',jobDetailController.deleteJobDetail)