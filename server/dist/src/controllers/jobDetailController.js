"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jobDetailService_1 = __importDefault(require("../services/jobDetailService"));
class JobDetailController {
    constructor() {
        this.getAll = async (req, res) => {
            try {
                let jobs = await jobDetailService_1.default.getAll();
                res.status(200).json(jobs);
            }
            catch (e) {
                res.status(500).json({
                    message: e.message
                });
            }
        };
        this.create = async (req, res) => {
            try {
                let jobs = await jobDetailService_1.default.save(req.body);
                res.status(200).json(jobs);
            }
            catch (e) {
                res.status(500).json({
                    message: e.message
                });
            }
        };
        this.jobDetailService = jobDetailService_1.default;
    }
}
exports.default = new JobDetailController();
//# sourceMappingURL=jobDetailController.js.map