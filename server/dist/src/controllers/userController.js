"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserService_1 = __importDefault(require("../services/UserService"));
class userController {
    constructor() {
        this.register = async (req, res) => {
            let user = await this.userService.register(req.body);
            res.status(201).json(user);
        };
        this.login = async (req, res) => {
            let response = await this.userService.checkUser(req.body);
            res.status(200).json(response);
        };
        this.changePassword = async (req, res) => {
            try {
                let user = await this.userService.checkChangePassword(req.params.id, req.body.oldPassword, req.body.newPassword);
                if (!user.check) {
                    res.json({
                        user,
                        mess: "Old Password Is Not Correct"
                    });
                }
                else {
                    res.json({
                        user,
                        mess: "Change Password Successfully"
                    });
                }
            }
            catch (e) {
                res.json({
                    mess: e.message,
                });
            }
        };
        this.getAll = async (req, res) => {
            let user = await UserService_1.default.getAll();
            res.status(201).json(user);
        };
        this.userService = UserService_1.default;
    }
}
exports.default = new userController();
//# sourceMappingURL=userController.js.map