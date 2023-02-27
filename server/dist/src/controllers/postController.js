"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const postService_1 = __importDefault(require("../services/postService"));
const jobDetailService_1 = __importDefault(require("../services/jobDetailService"));
class PostController {
    constructor() {
        this.getAll = async (req, res) => {
            try {
                let post = await postService_1.default.getAll();
                res.status(200).json(post);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.create = async (req, res) => {
            try {
                let a = req.body;
                let posts = {
                    salary: a.salary,
                    workLocation: a.workLocation,
                    position: a.position,
                    experience: a.experience,
                    workTime: a.workTime,
                    endTime: a.endTime,
                    description: a.description,
                    recruitmentsNumber: a.recruitmentsNumber,
                    status: a.status,
                    image: a.image,
                    title: a.title,
                    idEmployer: a.idEmployer
                };
                let newPost = await postService_1.default.save(a);
                let jd = {
                    postId: newPost.idPost,
                    jobId: a.idJob
                };
                let saveJobDetail = await jobDetailService_1.default.save(jd);
                res.status(200).json(newPost);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.update = async (req, res) => {
            try {
                let id = req.params.id;
                let post = {
                    title: req.body.title,
                    idEmployer: req.body.idEmployer,
                    salary: req.body.salary,
                    workLocation: req.body.workLocation,
                    position: req.body.position,
                    experience: req.body.experience,
                    workTime: req.body.workTime,
                    endTime: req.body.description,
                    recruitmentsNumber: req.body.recruitmentsNumber,
                    status: req.body.status,
                    image: req.body.image
                };
                let editPost = await this.postServices.update(id, post);
                res.status(200).json({ ok: editPost, message: 'Success!' });
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.delete = async (req, res) => {
            let id = req.params.id;
            await this.postServices.delete(id);
            await this.jobDetailServices.remove(id);
            res.status(200).json('Success!');
        };
        this.search = async (req, res) => {
            console.log(req.query);
            try {
                let post = await postService_1.default.search(req, res);
                res.status(200).json(post);
            }
            catch (e) {
                res.status(500).json(e.message);
            }
        };
        this.postServices = postService_1.default;
        this.jobDetailServices = jobDetailService_1.default;
    }
}
exports.default = new PostController();
//# sourceMappingURL=postController.js.map