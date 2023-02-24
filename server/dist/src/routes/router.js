"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const postRouter_1 = require("./postRouter");
const jobRouter_1 = require("./jobRouter");
const jobDetailRouter_1 = require("./jobDetailRouter");
const postController_1 = __importDefault(require("../controllers/postController"));
const employer_1 = __importDefault(require("./employer"));
const user_router_1 = require("./user.router");
exports.router = (0, express_1.Router)();
exports.router.get('/find-by-name', postController_1.default.searchPost);
exports.router.use('/employer', employer_1.default);
exports.router.use('/posts', postRouter_1.postRouter);
exports.router.use('/users', user_router_1.userRouter);
exports.router.use('/jobs', jobRouter_1.jobRouter);
exports.router.use('/jobDetails', jobDetailRouter_1.jobDetailRouter);
//# sourceMappingURL=router.js.map