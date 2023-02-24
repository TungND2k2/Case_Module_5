"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const postService_1 = __importDefault(require("../services/postService"));
class PostController {
    constructor() {
        this.getAllPost = async (req, res) => {
            try {
                let posts = await postService_1.default.getAll();
                res.status(200).json(posts);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.findByIdPost = async (req, res) => {
            try {
                let idPost = req.params.idPost;
                let posts = await postService_1.default.findById(idPost);
                res.status(200).json(posts);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.createPost = async (req, res) => {
            try {
                let posts = await postService_1.default.save(req.body);
                res.status(200).json(posts);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.editPost = async (req, res) => {
            try {
                let idPost = req.params.idPost;
                let newPost = req.body;
                let posts = await this.postService.updatePost(idPost, newPost);
                res.status(200).json(posts);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.deletePost = async (req, res) => {
            try {
                let idPost = req.params.idPost;
                let posts = await this.postService.removePost(idPost);
                res.status(200).json(posts);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.searchPost = async (req, res) => {
            try {
                let posts = await this.postService.search(req.body.name);
                res.status(200).json(posts);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.postService = postService_1.default;
    }
}
exports.default = new PostController();
//# sourceMappingURL=postController.js.map