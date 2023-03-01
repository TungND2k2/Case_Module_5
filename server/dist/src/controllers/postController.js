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
                let newPost = await postService_1.default.save(req.body);
                for (let i = 0; i < req.body.job.length; i++) {
                    let newJobDetail = {
                        postId: req.body.idPost,
                        jobId: req.body.job[i]
                    };
                    let saveJobDetail = await jobDetailService_1.default.save(newJobDetail);
                }
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
                    endTime: req.body.endTime,
                    recruitmentsNumber: req.body.recruitmentsNumber,
                    status: req.body.status,
                    image: req.body.image,
                    description: req.body.description
                };
                let editPost = await this.postServices.update(id, post);
                console.log(post);
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
            try {
                let limit = 6;
                let offset = 0;
                let page = 1;
                if (req.query.page) {
                    page = +req.query.page;
                    offset = (+page - 1) * limit;
                }
                let totalPosts = await this.postServices.countPosts();
                const countNumber = parseInt(totalPosts[0]['count(idPost)']);
                const posts = await postService_1.default.search(req, res);
                let totalPage = Math.ceil(countNumber / limit);
                return res.status(200).json({
                    posts: posts,
                    currentPage: page,
                    totalPage: totalPage
                });
            }
            catch (err) {
                console.log(err);
            }
        };
        this.postServices = postService_1.default;
        this.jobDetailServices = jobDetailService_1.default;
    }
}
exports.default = new PostController();
//# sourceMappingURL=postController.js.map