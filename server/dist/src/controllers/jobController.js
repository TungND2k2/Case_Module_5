"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jobService_1 = __importDefault(require("../services/jobService"));
class JobController {
    constructor() {
        this.getAll = async (req, res) => {
            try {
                let job = await jobService_1.default.getAll();
                res.status(200).json(job);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.jobServices = jobService_1.default;
    }
}
exports.default = new JobController();
//# sourceMappingURL=jobController.js.map