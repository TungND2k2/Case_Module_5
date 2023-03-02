import { Request, Response } from "express";
declare class AuthController {
    private employerService;
    constructor();
    getAllEmployer: (req: Request, res: Response) => Promise<void>;
    editEmployer: (req: Request, res: Response) => Promise<void>;
    findByIdEmployer: (req: Request, res: Response) => Promise<void>;
    register: (req: any, res: any) => Promise<void>;
    login: (req: Request, res: Response) => Promise<void>;
}
declare const _default: AuthController;
export default _default;
