import {Router} from "express";
import {postRouter} from "./postRouter";
import {jobRouter} from "./jobRouter";
import {jobDetailRouter} from "./jobDetailRouter";
import postController from "../controllers/postController";
import employerRouter from "./employer";
import {userRouter} from "./user.router";
export const router = Router()
router.get('/find-by-name', postController.searchPost);
router.use('/employer',employerRouter)
router.use('/posts',postRouter);
router.use('/users',userRouter);
router.use('/jobs',jobRouter)
router.use('/jobDetails',jobDetailRouter)
