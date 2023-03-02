"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const employerService_1 = __importDefault(require("../services/employerService"));
const employerService_2 = __importDefault(require("../services/employerService"));
class AuthController {
    constructor() {
        this.getAllEmployer = async (req, res) => {
            try {
                let employer = await employerService_2.default.getAll();
                res.status(200).json(employer);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.editEmployer = async (req, res) => {
            console.log(req.body);
            let id = req.params.id;
            let newEmployer = req.body;
            await this.employerService.update(id, newEmployer);
            res.status(200).json('Success!');
        };
        this.findByIdEmployer = async (req, res) => {
            try {
                let id = req.params.id;
                let employer = await this.employerService.findById(id);
                res.status(200).json(employer);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
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