"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const post_1 = require("../models/post");
const data_source_1 = require("../data-source");
class PostService {
    constructor() {
        this.getAll = async () => {
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
                   order by idPost DESC`;
            let post1 = await this.postRepository.query(sql);
            const result = post1.reduce((acc1, { idPost, title, salary, workLocation, position, experience, workTime, endTime, description, recruitmentsNumber, status, employerName, image, jobName }) => {
                var _a;
                (_a = acc1[idPost]) !== null && _a !== void 0 ? _a : (acc1[idPost] = {
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
                });
                if (Array.isArray(jobName))
                    acc1[idPost].jobName = acc1[idPost].jobName.concat(jobName);
                else
                    acc1[idPost].jobName.push(jobName);
                return acc1;
            }, {});
            let posts = [];
            for (let i = Object.values(result).length - 1; i >= Object.values(result).length - 3; i--) {
                if (Object.values(result)[i] !== null && Object.values(result)[i] !== undefined) {
                    posts.push(Object.values(result)[i]);
                }
            }
            return posts;
        };
        this.countPosts = async () => {
            try {
                let sql = `select count(idPost)
                       from post`;
                let posts = await this.postRepository.query(sql);
                return posts;
            }
            catch (e) {
                console.log(e);
            }
        };
        this.save = async (post) => {
            return this.postRepository.save(post);
        };
        this.update = async (id, newPost) => {
            let post = await this.postRepository.findOneBy({ idPost: id });
            if (!post) {
                return null;
            }
            newPost.idPost = id;
            return this.postRepository.update({ idPost: id }, newPost);
        };
        this.remove = async (id) => {
            let post = await this.postRepository.findOneBy({ idPost: id });
            if (!post) {
                return null;
            }
            else {
                return this.postRepository.delete({ idPost: id });
            }
        };
        this.search = async (req, res) => {
            console.log(req.query);
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
                   where (1 = 1) `;
            if (req.query.title !== undefined) {
                sql += `and title like '%${req.query.title}'`;
            }
            if (req.query.idPost !== undefined) {
                sql += `and idPost like '%${req.query.idPost}'`;
            }
            if (req.query.salary !== undefined) {
                switch (req.query.salary) {
                    case '0to2000':
                        sql += `and salary between 0 AND 2000 `;
                        break;
                    case '2000to4000':
                        sql += `and salary between 2000 AND 4000 `;
                        break;
                    case 'upto4000':
                    case '2000-4000':
                        sql += `and salary between 2001 AND 4000 `;
                    case '4000':
                        sql += `and salary between 4001 AND 100000000 `;
                        break;
                }
            }
            if (req.query.workLocation !== undefined) {
                sql += `and workLocation like '%${req.query.workLocation}'`;
            }
            if (req.query.workTime !== undefined) {
                sql += `and workTime like '%${req.query.workTime}'`;
            }
            if (req.query.position !== undefined) {
                sql += `and position like '%${req.query.position}'`;
            }
            if (req.query.experience !== undefined) {
                sql += `and experience like '%${req.query.experience}'`;
            }
            let listJob = [];
            if (req.query.jobName !== undefined) {
                if (Array.isArray(req.query.jobName)) {
                    listJob = req.query.jobName;
                    sql += `and (jobName like (1=1)`;
                    for (let i = 0; i < listJob.length; i++) {
                        sql += `or jobName like '%${listJob[i]}'`;
                    }
                    sql += `)`;
                }
                else {
                    listJob.push(req.query.jobName);
                    sql += `and (jobName like (1=1)`;
                    for (let i = 0; i < listJob.length; i++) {
                        sql += `or jobName like '%${listJob[i]}'`;
                    }
                    sql += `)`;
                }
            }
            sql += `order by idPost DESC`;
            console.log(sql);
            let post = await this.postRepository.query(sql);
            const result = post.reduce((acc, { idPost, title, salary, workLocation, position, experience, workTime, endTime, description, recruitmentsNumber, status, employerName, image, jobName }) => {
                var _a;
                (_a = acc[idPost]) !== null && _a !== void 0 ? _a : (acc[idPost] = {
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
                });
                if (Array.isArray(jobName))
                    acc[idPost].jobName = acc[idPost].jobName.concat(jobName);
                else
                    acc[idPost].jobName.push(jobName);
                return acc;
            }, {});
            let listPost = [];
            for (let i = 0; i < Object.values(result).length; i++) {
                if (Object.values(result)[i].jobName.length === listJob.length || listJob.length === 0) {
                    listPost.push(Object.values(result)[i]);
                }
            }
            console.log(listPost);
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
                   order by idPost DESC`;
            let post1 = await this.postRepository.query(sql1);
            const result1 = post1.reduce((acc1, { idPost, title, salary, workLocation, position, experience, workTime, endTime, description, recruitmentsNumber, status, employerName, image, jobName }) => {
                var _a;
                (_a = acc1[idPost]) !== null && _a !== void 0 ? _a : (acc1[idPost] = {
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
                });
                if (Array.isArray(jobName))
                    acc1[idPost].jobName = acc1[idPost].jobName.concat(jobName);
                else
                    acc1[idPost].jobName.push(jobName);
                return acc1;
            }, {});
            let allPost = Object.values(result1);
            let searchPost = [];
            for (let i = 0; i < allPost.length; i++) {
                for (let j = 0; j < listPost.length; j++) {
                    if (listPost[j].idPost === allPost[i].idPost) {
                        searchPost.push(allPost[i]);
                    }
                }
            }
            return searchPost;
        };
        this.postRepository = data_source_1.AppDataSource.getRepository(post_1.Post);
    }
}
exports.default = new PostService();
//# sourceMappingURL=postService.js.map