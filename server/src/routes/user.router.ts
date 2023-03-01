import {Router} from "express";
import userController from "../controllers/userController";


export const userRouter = Router();
userRouter.get('/',userController.getAll)
userRouter.put('/:id',userController.editUser)
userRouter.post('/login' , userController.login);
userRouter.get('/findById/:id', userController.findByIdUser);
userRouter.post('/register' , userController.register);
userRouter.post('/changepassword/:id', userController.changePassword)

