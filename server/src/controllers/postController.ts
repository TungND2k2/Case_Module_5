import {Request, Response} from "express";
import postServices from "../services/postService";
import jobDetailService from "../services/jobDetailService";
import {Post} from "../models/post";


class PostController {
    private postServices
    private jobDetailServices

    constructor() {
        this.postServices = postServices;
        this.jobDetailServices = jobDetailService;
    }

    getAll = async (req: Request, res: Response) => {
        try {
            let post = await postServices.getAll()
            res.status(200).json(post)
        } catch (e) {
            res.status(500).json(e.message)
        }


    }
    create = async (req: Request, res: Response) => {

        try {
            let newPost = await postServices.save(req.body)
            for (let i = 0; i < req.body.job.length; i++) {
                let newJobDetail ={
                    postId: req.body.idPost,
                    jobId: req.body.job[i]
                }
                let saveJobDetail = await jobDetailService.save(newJobDetail)

            }
            res.status(200).json(newPost);
        } catch (e) {
            res.status(500).json(e.message)
        }
    }

    update = async (req: Request, res: Response) => {
        try {
            let id = req.params.id;
            let post = {
                title: req.body.title,
                idEmployer: req.body.idEmployer,
                salary : req.body.salary,
                workLocation : req.body.workLocation,
                position : req.body.position,
                experience: req.body.experience,
                workTime : req.body.workTime,
                endTime: req.body.endTime,
                description : req.body.description,
                recruitmentsNumber : req.body.recruitmentsNumber,
                status : req.body.status,
                image : req.body.image
            }
            let editPost = await this.postServices.update(id, post)
            await jobDetailService.update(id)
            for (let i = 0; i < req.body.job.length; i++) {
                let newJobDetail ={
                    postId: id,
                    jobId: req.body.job[i]
                }
                let saveJobDetail = await jobDetailService.save(newJobDetail)
            }
            res.status(200).json({ok: editPost, message: 'Success!'})
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    delete = async (req: Request, res: Response) => {
        let id = req.params.id;
        await this.postServices.remove(id);
        await this.jobDetailServices.removeJobDetail(id);
        res.status(200).json('Success!')
    }
    search = async (req: Request, res: Response) => {
        try {
            let limit = 6;
            let offset = 0;
            let page = 1;
            if (req.query.page) {
                page = +req.query.page;
                offset = (+page - 1) * limit;
            }
            let totalPosts =  await this.postServices.countPosts();
            const countNumber = parseInt(totalPosts[0]['count(idPost)']);
            const  posts = await postServices.search(req,res);
            let totalPage = Math.ceil(countNumber / limit);
            return res.status(200).json({
                posts: posts,
                currentPage: page,
                totalPage: totalPage

            });
        }catch (err) {
            console.log(err)
        }

    }
}
export default new PostController();
