import {Request, Response} from "express";
import postServices from "../services/postService";
import jobDetailService from "../services/jobDetailService";


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

            let a = req.body
            console.log(req.body)
            let posts = {
                salary : a.salary,
                workLocation : a.workLocation,
                position :  a.position,
                experience:  a.experience,
                workTime: a.workTime,
                endTime: a.endTime,
                description :a.description,
                recruitmentsNumber: a.recruitmentsNumber,
                status: a.status,
                image: a.image,
                title: a.title,
                idEmployer: a.idEmployer
            }
            let newPost = await postServices.save(a)
            let jd = {
                postId: newPost.idPost,
                jobId : a.idJob

            }
            console.log(jd)

            let saveJobDetail = await jobDetailService.save(jd)

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
                endTime : req.body.description,
                recruitmentsNumber : req.body.recruitmentsNumber,
                status : req.body.status,
                image : req.body.image
            }
            let editPost = await this.postServices.update(id, post)
            res.status(200).json({ok: editPost, message: 'Success!'})
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
    delete = async (req: Request, res: Response) => {
        let id = req.params.id;
        await this.postServices.delete(id);
        await this.jobDetailServices.remove(id);
        res.status(200).json('Success!')
    }
    search = async (req: Request, res: Response) => {
        console.log(req.query)
        try {
            let post = await postServices.search(req,res)
            res.status(200).json(post)
        } catch (e) {
            res.status(500).json(e.message)
        }
    }
}
export default new PostController();
