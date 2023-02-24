import {Post} from "../models/post";

import {AppDataSource} from "../data-source";
import {Request, Response} from "express";

//
class PostService {
    private postRepository;

    constructor() {
        this.postRepository = AppDataSource.getRepository(Post);
    }

    getAll = async () => {
        let sql = 'select * from post'
        let post = await this.postRepository.query(sql);
        return post;
    }
    save = async (post) => {
        return this.postRepository.save(post);
    }
    update = async (id, newPost) => {
        let post = await this.postRepository.findOneBy({idPost: id});
        if (!post) {
            return null;
        }
        console.log(newPost)
        newPost.idPost = id;
        return this.postRepository.update({idPost: id}, newPost);

    }
    delete = async (id) => {
        let post = await this.postRepository.findOneBy({idPost: id});
        if (!post) {
            return null;
        } else {
            return this.postRepository.delete({idPost: id});
        }
    }
    search = async (req: Request, res: Response) => {
        console.log(req.query)
        let sql = `select idPost,
                          title,
                          salary,
                          workLocation,
                          position,
                          experience,
                          workTime,
                          endTime,
                          post.description,
                          recruitmentsNumber,
                          post.status,
                          image
                   from post
                            join job_detail jd on post.idPost = jd.postId
                            join job j on jd.jobId = j.jobId
                   where (1=1)`
        if (req.query.title !== undefined) {
            sql += `and title like '%${req.query.title}'`
        }
        if (req.query.salary !== undefined) {
            sql += `and salary like '%${req.query.salary}'`
        }
        if (req.query.workLocation !== undefined) {
            sql += `and workLocation like '%${req.query.workLocation}'`
        }
        if (req.query.position !== undefined) {
            sql += `and position like '%${req.query.position}'`
        }
        if (req.query.experience !== undefined) {
            sql += `and experience like '%${req.query.experience}'`
        }
        if (req.query.jobName !== undefined) {
            sql += `and jobName like '%${req.query.jobName}'`
        }
        sql += `group by idPost`
        let post = await this.postRepository.query(sql);
        return post;
    }
}

export default new PostService();