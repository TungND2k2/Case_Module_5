"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jobRouter = void 0;
const express_1 = require("express");
const jobController_1 = __importDefault(require("../controllers/jobController"));
exports.jobRouter = (0, express_1.Router)();
exports.jobRouter.get('/', jobController_1.default.getAllJob);
exports.jobRouter.post('/', jobController_1.default.createJob);
exports.jobRouter.delete('/:idJob', jobController_1.default.deleteJob);
//# sourceMappingURL=jobRouter.js.map