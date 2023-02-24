import { Router } from 'express';
import employer from "./employer";

import {userRouter} from "./userRouter";
import {PostRouter} from "./post";
import {jobRouter} from "./jobRouter";
import {jobDetailRouter} from "./jobDetailRouter";
import employerRouter from "./employer";
export const router = Router()
router.use('/employer',employerRouter)
router.use('/posts',PostRouter);
router.use('/users',userRouter);
router.use('/jobs',jobRouter)
router.use('/jobDetails',jobDetailRouter)
