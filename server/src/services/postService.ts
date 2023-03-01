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
                   from post p
                            join employer e on p.idEmployer = e.idEmployer
                            join job_detail jd on p.idPost = jd.postId
                            join job j on jd.jobId = j.jobId
                   order by idPost DESC`
        let post1 = await this.postRepository.query(sql);
        const result = post1.reduce((acc1, {
            idPost,
            title,
            salary,
            workLocation,
            position,
            experience,
            workTime,
            endTime,
            description,
            recruitmentsNumber,
            status,
            employerName,
            image,
            jobName
        }) => {
            acc1[idPost] ??= {
                idPost: idPost,
                title: title,
                salary: salary,
                workLocation: workLocation,
                position: position,
                experience: experience,
                workTime: workTime,
                endTime: endTime,
                description: description,
                recruitmentsNumber: recruitmentsNumber,
                status: status,
                employerName: employerName,
                image: image,
                jobName: []
            };
            if (Array.isArray(jobName)) // if it's array type then concat
                acc1[idPost].jobName = acc1[idPost].jobName.concat(jobName);
            else
                acc1[idPost].jobName.push(jobName);
            return acc1;
        }, {});
        return Object.values(result);
    }
    countPosts = async () => {
        try {
            let sql = `select count(idPost)
                       from post`
            let posts = await this.postRepository.query(sql)
            return posts
        } catch (e) {
            console.log(e)
        }
    }
    save = async (post) => {
        return this.postRepository.save(post);
    }
    update = async (id, newPost) => {
        let post = await this.postRepository.findOneBy({idPost: id});
        if (!post) {
            return null;
        }

        newPost.idPost = id;
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
    search = async (req: Request, res: Response, limit, offset) => {
        console.log(req.query)
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
                   from post p
                            join employer e on p.idEmployer = e.idEmployer
                            join job_detail jd on p.idPost = jd.postId
                            join job j on jd.jobId = j.jobId
                   where (1 = 1) `
        if (req.query.title !== undefined) {
            sql += `and title like '%${req.query.title}'`
        }
        if (req.query.idPost !== undefined) {
            sql += `and idPost like '%${req.query.idPost}'`
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
        let listJob = []
        // if (Array.isArray(req.query.jobName)){
        //     listJob = req.query.jobName
        // }
        // else if(req.query.jobName === undefined){
        //     listJob = []
        // }
        // else {
        //     listJob.push(req.query.jobName)
        // }
        if (req.query.jobName !== undefined){
            if (Array.isArray(req.query.jobName)){
                listJob = req.query.jobName
                sql += `and (jobName like (1=1)`
                for (let i = 0; i < listJob.length; i++) {
                    sql+= `or jobName like '%${listJob[i]}'`
                }
                sql += `)`
            }else {
                listJob.push(req.query.jobName)
                sql += `and (jobName like (1=1)`
                for (let i = 0; i < listJob.length; i++) {
                    sql+= `or jobName like '%${listJob[i]}'`
                }
                sql += `)`
            }
        }
        // if (req.query.jobName !== undefined ) {
        //     sql += `and (jobName like (1=1)`
        //     for (let i = 0; i < listJob.length; i++) {
        //         sql+= `or jobName like '%${listJob[i]}'`
        //     }
        //     sql += `)`
        // }

        sql += `order by idPost DESC`
        console.log(sql)
        let post = await this.postRepository.query(sql);
        const result = post.reduce((acc, {
            idPost,
            title,
            salary,
            workLocation,
            position,
            experience,
            workTime,
            endTime,
            description,
            recruitmentsNumber,
            status,
            employerName,
            image,
            jobName
        }) => {
            acc[idPost] ??= {
                idPost: idPost,
                title: title,
                salary: salary,
                workLocation: workLocation,
                position: position,
                experience: experience,
                workTime: workTime,
                endTime: endTime,
                description: description,
                recruitmentsNumber: recruitmentsNumber,
                status: status,
                employerName: employerName,
                image: image,
                jobName: []
            };
            if (Array.isArray(jobName)) // if it's array type then concat
                acc[idPost].jobName = acc[idPost].jobName.concat(jobName);
            else
                acc[idPost].jobName.push(jobName);
            return acc;
        }, {});
        let listPost = []
        console.log(listJob)
        for (let i = 0; i < Object.values(result).length; i++) {
            // @ts-ignore
            if (Object.values(result)[i].jobName.length === listJob.length || listJob.length===0){
                listPost.push(Object.values(result)[i])
            }
        }
        console.log(listPost)
        ////////////////////////////////////////////////////////////////////////////////////////
        let sql1 = `select idPost,
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
                   from post p
                            join employer e on p.idEmployer = e.idEmployer
                            join job_detail jd on p.idPost = jd.postId
                            join job j on jd.jobId = j.jobId
                   order by idPost DESC`
        let post1 = await this.postRepository.query(sql1);
        const result1 = post1.reduce((acc1, {
            idPost,
            title,
            salary,
            workLocation,
            position,
            experience,
            workTime,
            endTime,
            description,
            recruitmentsNumber,
            status,
            employerName,
            image,
            jobName
        }) => {
            acc1[idPost] ??= {
                idPost: idPost,
                title: title,
                salary: salary,
                workLocation: workLocation,
                position: position,
                experience: experience,
                workTime: workTime,
                endTime: endTime,
                description: description,
                recruitmentsNumber: recruitmentsNumber,
                status: status,
                employerName: employerName,
                image: image,
                jobName: []
            };
            if (Array.isArray(jobName)) // if it's array type then concat
                acc1[idPost].jobName = acc1[idPost].jobName.concat(jobName);
            else
                acc1[idPost].jobName.push(jobName);
            return acc1;
        }, {});

        let allPost = Object.values(result1)
        let searchPost = []
        for (let i = 0; i < allPost.length; i++) {
            for (let j = 0; j < listPost.length; j++) {
                // @ts-ignore
                if(listPost[j].idPost === allPost[i].idPost){
                    searchPost.push(allPost[i])
                }
            }
        }
        return searchPost;
    }
}

export default new PostService();
