import { Router } from 'express';
import employer from "./employer";
import {PostRouter} from "./post";

export const router = Router();
router.use('/employers',employer)
router.use('/posts',PostRouter)