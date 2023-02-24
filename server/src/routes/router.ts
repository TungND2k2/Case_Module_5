import {Router} from "express";
import {userRouter} from "./user.router";
import employer from "./employer";
export const router = Router();

router.use('/user',userRouter);
router.use('/employer',employer);
