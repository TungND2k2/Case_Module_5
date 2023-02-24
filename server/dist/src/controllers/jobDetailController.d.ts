import { Request, Response } from "express";
declare class JobDetailController {
    private jobDetailService;
    constructor();
    getAll: (req: Request, res: Response) => Promise<void>;
    create: (req: Request, res: Response) => Promise<void>;
}
declare const _default: JobDetailController;
export default _default;
