import { Request, Response } from "express";
declare class PostService {
    private postRepository;
    constructor();
    getAll: () => Promise<any[]>;
    countPosts: () => Promise<any>;
    save: (post: any) => Promise<any>;
    update: (id: any, newPost: any) => Promise<any>;
    remove: (id: any) => Promise<any>;
    search: (req: Request, res: Response) => Promise<any[]>;
}
declare const _default: PostService;
export default _default;
