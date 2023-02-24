import { Request, Response } from 'express';
declare class JobController {
    private jobServices;
    constructor();
    getAll: (req: Request, res: Response) => Promise<void>;
}
declare const _default: JobController;
export default _default;
