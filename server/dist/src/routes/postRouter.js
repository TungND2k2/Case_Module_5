"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRouter = void 0;
const express_1 = require("express");
const postController_1 = __importDefault(require("../controllers/postController"));
exports.postRouter = (0, express_1.Router)();
exports.postRouter.get('/', postController_1.default.getAllPost);
exports.postRouter.post('/', postController_1.default.createPost);
exports.postRouter.put('/:idPost', postController_1.default.editPost);
exports.postRouter.delete('/:idPost', postController_1.default.deletePost);
//# sourceMappingURL=postRouter.js.map