import { Request, Response } from "express";
declare class PostController {
    private postServices;
    private jobDetailServices;
    constructor();
    getAll: (req: Request, res: Response) => Promise<void>;
    create: (req: Request, res: Response) => Promise<void>;
    update: (req: Request, res: Response) => Promise<void>;
    delete: (req: Request, res: Response) => Promise<void>;
    search: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: PostController;
export default _default;
