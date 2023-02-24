import {Request, Response} from "express";
import EmployerService from "../services/employerService"
class AuthController {
    private employerService

    constructor() {
        this.employerService = EmployerService;
    }

    register = async (req, res) => {
        let employer = await this.employerService.register(req.body)
        res.status(200).json(employer)
    }

    login = async (req: Request, res: Response) => {
        let employer = {
            employerName : req.body.employerName,
            employerPassword : req.body.employerPassword
        }

        let response = await this.employerService.checkUser(employer)
        res.status(200).json(response)


    }


}
export default new AuthController()