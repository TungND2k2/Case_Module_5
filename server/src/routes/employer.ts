import { Router } from 'express';
import EmployerController from "../controllers/employerController";

const employerRouter = Router();
employerRouter.post('/register',EmployerController.register)
employerRouter.post('/login',EmployerController.login)
export default employerRouter