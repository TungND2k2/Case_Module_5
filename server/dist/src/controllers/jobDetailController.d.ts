import { Request, Response } from "express";
declare class JobDetailController {
    private jobDetailService;
    constructor();
    getAllJobDetail: (req: Request, res: Response) => Promise<void>;
    createJobDetail: (req: Request, res: Response) => Promise<void>;
    deleteJobDetail: (req: Request, res: Response) => Promise<void>;
}
declare const _default: JobDetailController;
export default _default;
