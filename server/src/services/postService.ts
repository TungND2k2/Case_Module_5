import {Post} from "../models/post";

import {AppDataSource} from "../data-source";
import {Request, Response} from "express";


class PostService {
    private postRepository;

    constructor() {
        this.postRepository = AppDataSource.getRepository(Post);
    }

    getAll = async () => {
        let sql = `select idPost,
                          title,
                          salary,
                          workLocation,
                          position,
                          experience,
                          workTime,
                          endTime,
                          p.description,
                          recruitmentsNumber,
                          p.status,
                          e.employerName,
                          image,
                          j.jobName
                   from post p join employer e on p.idEmployer = e.idEmployer
                               join job_detail jd on p.idPost = jd.postId
                               join job j on jd.jobId = j.jobId
                   order by idPost DESC limit 6`
        return await this.postRepository.query(sql);
    }
    countPosts=async ( ) => {
        try {
            let sql=`select count(idPost) from post`
            return await this.postRepository.query(sql)
        }catch (e) {
            console.log(e)
        }
    }
    save = async (post) => {
        return this.postRepository.save(post);
    }
    update = async (id, newPost) => {
        let post = await this.postRepository.findOneBy({idPost: id});
        console.log(newPost , 'lllll')
        if (!post) {
            return null;
        }
        return this.postRepository.update({idPost: id}, newPost);

    }
    remove = async (id) => {
        let post = await this.postRepository.findOneBy({idPost: id});
        if (!post) {
            return null;
        } else {
            return this.postRepository.delete({idPost: id});
        }
    }
    search = async (req: Request, res: Response,limit, offset) => {
        console.log(req.query)
        let sql = `select idPost,
                          salary,
                          workLocation,
                          position,
                          experience,
                          workTime,
                          endTime,
                          p.description,
                          recruitmentsNumber,
                          p.status,
                          e.employerName,
                          image,
                          title,
                          j.jobName
                   from post p join employer e on p.idEmployer = e.idEmployer
                               join job_detail jd on p.idPost = jd.postId
                               join job j on jd.jobId = j.jobId 
                   where (1 = 1) `
        if (req.query.title !== undefined) {
            sql += `and title like '%${req.query.title}'`
        }
        if (req.query.salary !== undefined) {
            sql += `and salary like '%${req.query.salary}'`
        }
        if (req.query.workLocation !== undefined) {
            sql += `and workLocation like '%${req.query.workLocation}'`
        }
        if (req.query.workTime !== undefined) {
            sql += `and workTime like '%${req.query.workTime}'`
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
        sql += ` order by idPost DESC limit ${limit} offset ${offset}`
        return await this.postRepository.query(sql);
    }
}

export default new PostService();
