import {Router} from "express";
import {userRouter} from "./userRouter";
import {postRouter} from "./postRouter";
import {jobRouter} from "./jobRouter";
import {jobDetailRouter} from "./jobDetailRouter";
export const router = Router()
router.use('/posts',postRouter);
router.use('/users',userRouter);
router.use('/jobs',jobRouter)
router.use('/jobDetails',jobDetailRouter)