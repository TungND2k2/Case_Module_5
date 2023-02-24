"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jobService_1 = __importDefault(require("../services/jobService"));
class JobController {
    constructor() {
        this.getAllJob = async (req, res) => {
            try {
                let jobs = await jobService_1.default.getAll();
                res.status(200).json(jobs);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.createJob = async (req, res) => {
            try {
                let jobs = await jobService_1.default.save(req.body);
                res.status(200).json(jobs);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.deleteJob = async (req, res) => {
            try {
                let idJob = req.params.idJob;
                let jobs = await this.jobService.removeJob(idJob);
                res.status(200).json(jobs);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.jobService = jobService_1.default;
    }
}
exports.default = new JobController();
//# sourceMappingURL=jobController.js.map