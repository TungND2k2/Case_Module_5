import { Request, Response } from "express";
declare class JobController {
    private jobService;
    constructor();
    getAllJob: (req: Request, res: Response) => Promise<void>;
    createJob: (req: Request, res: Response) => Promise<void>;
    deleteJob: (req: Request, res: Response) => Promise<void>;
}
declare const _default: JobController;
export default _default;
