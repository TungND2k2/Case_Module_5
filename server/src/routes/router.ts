import {Router} from "express";
import {userRouter} from "./userRouter";
import {postRouter} from "./postRouter";
import {jobRouter} from "./jobRouter";
import {jobDetailRouter} from "./jobDetailRouter";
import postController from "../controllers/postController";
import employerRouter from "./employer";
export const router = Router()
router.get('/find-by-name', postController.searchPost);
router.use('/employer',employerRouter)
router.use('/posts',postRouter);
router.use('/users',userRouter);
router.use('/jobs',jobRouter)
router.use('/jobDetails',jobDetailRouter)