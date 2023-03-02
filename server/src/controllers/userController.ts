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
    findByIdUser = async (req: Request, res: Response) => {
        try{
            let id = req.params.id
            console.log(id)
            let user = await this.userService.findById(id);
            res.status(200).json(user)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    changePassword = async (req: Request, res: Response) => {
        console.log(req.params.id)
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
                mess: e.message + 1,
            })
        }
    }
    getAll = async (req: Request, res: Response) => {
        let user = await userService.getAll()
        res.status(201).json(user)
    }
    editUser = async (req: Request, res: Response) => {
        let id = req.params.id;
        let newUser = req.body;
        await this.userService.update(id, newUser);
        res.status(200).json('Success!')
    }

}

export default new userController();
