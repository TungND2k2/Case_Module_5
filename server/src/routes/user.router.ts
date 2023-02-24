import {Router} from "express";
import userController from "../controllers/userController";


export const userRouter = Router();
userRouter.get('/',userController.getAll)
userRouter.post('/login' , userController.login);
userRouter.post('/register' , userController.register);
userRouter.post('/changepassword/:id', userController.changePassword)

