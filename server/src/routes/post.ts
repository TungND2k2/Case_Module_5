import {Router} from "express";
import JobDetailController from "../controllers/jobDetailController";
import postController from "../controllers/postController";

export const PostRouter = Router();
PostRouter.get('/',postController.getAll);
PostRouter.post('/',postController.create);
PostRouter.put('/:id',postController.update);
PostRouter.delete('/:id',postController.delete);
PostRouter.get('/search',postController.search);
PostRouter.get('/detail',JobDetailController.getAllJobDetail);
