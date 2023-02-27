import {Request, Response} from "express";
import userService from "../services/UserService";

class userController {
    private userService;


    constructor() {
        this.userService = userService;
    }

    register = async (req: Request, res: Response) => {
        let user = await this.userService.register(req.body);
        res.status(201).json(user)
    }
    login = async (req: Request, res: Response) => {
        let user = {
            username : req.body.username,
            userPassword : req.body.userPassword
        }
        let response = await this.userService.checkUser(user);
        res.status(200).json(response)
    }
    findById = async (req: Request, res: Response) => {
        try{
            let id = req.params.id
            let user = await this.userService.findById(id);
            res.status(200).json(user)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    changePassword = async (req: Request, res: Response) => {
        try {
            let user = await this.userService.checkChangePassword(req.params.id, req.body.oldPassword, req.body.newPassword)
            if (!user.check) {
                res.json({
                    user,
                    mess: "Old Password Is Not Correct"
                })
            } else {
                res.json({
                    user,
                    mess: "Change Password Successfully"
                })
            }
        } catch (e) {
            res.json({
                mess: e.message,
            })
        }
    }
    getAll = async (req: Request, res: Response) => {
        let user = await userService.getAll()
        res.status(201).json(user)
    }

}

export default new userController();
