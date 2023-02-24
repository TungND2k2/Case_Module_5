import {Router} from "express";
import jobController from "../controllers/jobController";


export const jobRouter = Router();
jobRouter.get('/',jobController.getAllJob)
jobRouter.post('/',jobController.createJob)
jobRouter.delete('/:idJob',jobController.deleteJob)