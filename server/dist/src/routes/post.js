"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostRouter = void 0;
const express_1 = require("express");
const jobDetailController_1 = __importDefault(require("../controllers/jobDetailController"));
const postController_1 = __importDefault(require("../controllers/postController"));
exports.PostRouter = (0, express_1.Router)();
exports.PostRouter.get('/', postController_1.default.getAll);
exports.PostRouter.post('/', postController_1.default.create);
exports.PostRouter.put('/:id', postController_1.default.update);
exports.PostRouter.delete('/:id', postController_1.default.delete);
exports.PostRouter.get('/search', postController_1.default.search);
exports.PostRouter.get('/detail', jobDetailController_1.default.getAllJobDetail);
//# sourceMappingURL=post.js.map