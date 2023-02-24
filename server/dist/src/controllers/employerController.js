"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const employerService_1 = __importDefault(require("../services/employerService"));
class AuthController {
    constructor() {
        this.register = async (req, res) => {
            let employer = await this.employerService.register(req.body);
            res.status(200).json(employer);
        };
        this.login = async (req, res) => {
            let employer = {
                employerName: req.body.employerName,
                employerPassword: req.body.employerPassword
            };
            let response = await this.employerService.checkUser(employer);
            res.status(200).json(response);
        };
        this.employerService = employerService_1.default;
    }
}
exports.default = new AuthController();
//# sourceMappingURL=employerController.js.map