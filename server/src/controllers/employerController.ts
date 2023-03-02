import {Request, Response} from "express";
import EmployerService from "../services/employerService"
import employerService from "../services/employerService";
class AuthController {
    private employerService

    constructor() {
        this.employerService = EmployerService;
    }
    getAllEmployer = async (req: Request, res: Response)=>{
        try{
            let employer = await employerService.getAll()
            res.status(200).json(employer)
        }catch (e) {
            res.status(500).json(e.message)
        }

    }
    editEmployer = async (req: Request, res: Response) => {
        console.log(req.body)
        let id = req.params.id;
        let newEmployer= req.body;
        await this.employerService.update(id, newEmployer);
        res.status(200).json('Success!')
    }
    findByIdEmployer = async (req: Request, res: Response) => {
        try{
            let id = req.params.id
            let employer = await this.employerService.findById(id);
            res.status(200).json(employer)
        } catch (e) {
            res.status(500).json(e.message)
        }
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