
import postService from "../services/postService";
import {Request, Response} from "express";

class PostController {
    private postService
    constructor() {
        this.postService = postService;
    }
    getAllPost = async (req: Request, res: Response)=>{
        try{
            let posts = await postService.getAll()
            res.status(200).json(posts)
        }catch (e) {
            res.status(500).json(e.message)
        }

    }
    findByIdPost = async (req: Request, res: Response) => {
        try {
            let idPost = req.params.idPost
            let posts = await postService.findById(idPost);
            res.status(200).json(posts)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    createPost = async (req: Request, res: Response) => {
        try {
            let posts = await postService.save(req.body);
            res.status(200).json(posts)
        } catch (e) {
            res.status(500).json(e.message)
        }

    }
    editPost = async (req: Request, res: Response)=> {
        try {
            let idPost = req.params.idPost;
            let newPost = req.body;
            let posts = await this.postService.updatePost(idPost,newPost);
                res.status(200).json(posts)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    deletePost = async (req: Request, res: Response)=> {
        try {
            let idPost = req.params.idPost;
            let posts = await this.postService.removePost(idPost);
            res.status(200).json(posts)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    searchPost = async (req: Request, res: Response)=> {
        try {
            let posts = await this.postService.search(req.body.name);
            res.status(200).json(posts)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

}
export default new PostController()
