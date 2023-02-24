import { Request, Response } from "express";
declare class PostController {
    private postService;
    constructor();
    getAllPost: (req: Request, res: Response) => Promise<void>;
    findByIdPost: (req: Request, res: Response) => Promise<void>;
    createPost: (req: Request, res: Response) => Promise<void>;
    editPost: (req: Request, res: Response) => Promise<void>;
    deletePost: (req: Request, res: Response) => Promise<void>;
    searchPost: (req: Request, res: Response) => Promise<void>;
}
declare const _default: PostController;
export default _default;
