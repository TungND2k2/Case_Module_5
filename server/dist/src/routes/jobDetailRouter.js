"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jobDetailRouter = void 0;
const express_1 = require("express");
const jobDetailController_1 = __importDefault(require("../controllers/jobDetailController"));
exports.jobDetailRouter = (0, express_1.Router)();
exports.jobDetailRouter.get('/', jobDetailController_1.default.getAllJobDetail);
exports.jobDetailRouter.post('/', jobDetailController_1.default.createJobDetail);
exports.jobDetailRouter.delete('/:idJobDetail', jobDetailController_1.default.deleteJobDetail);
//# sourceMappingURL=jobDetailRouter.js.map