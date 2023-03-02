import { Router } from 'express';
import EmployerController from "../controllers/employerController";
import {userRouter} from "./user.router";
import employerController from "../controllers/employerController";

const employerRouter = Router();
employerRouter.get('/',EmployerController.getAllEmployer)
employerRouter.put('/:id',EmployerController.editEmployer)
employerRouter.get('/findById/:id', employerController.findByIdEmployer);
employerRouter.post('/register',EmployerController.register)
employerRouter.post('/login',EmployerController.login)
export default employerRouter