"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jobDetailService_1 = __importDefault(require("../services/jobDetailService"));
class JobDetailController {
    constructor() {
        this.getAllJobDetail = async (req, res) => {
            try {
                let jobDetails = await jobDetailService_1.default.getAll();
                res.status(200).json(jobDetails);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.createJobDetail = async (req, res) => {
            try {
                let jobDetails = await jobDetailService_1.default.save(req.body);
                res.status(200).json(jobDetails);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.deleteJobDetail = async (req, res) => {
            try {
                let idJobDetail = req.params.id;
                let jobDetails = await this.jobDetailService.removeJobDetail(idJobDetail);
                res.status(200).json(jobDetails);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.jobDetailService = jobDetailService_1.default;
    }
}
exports.default = new JobDetailController();
//# sourceMappingURL=jobDetailController.js.map