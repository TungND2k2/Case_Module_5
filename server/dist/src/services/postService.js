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
                   from post p join employer e on p.idEmployer = e.idEmployer
                               join job_detail jd on p.idPost = jd.postId
                               join job j on jd.jobId = j.jobId
                   order by idPost DESC `;
            let post1 = await this.postRepository.query(sql);
            const result = post1.reduce((acc1, { idPost, title, salary, workLocation, position, experience, workTime, endTime, description, recruitmentsNumber, status, employerName, image, jobName }) => {
                var _a;
                (_a = acc1[idPost]) !== null && _a !== void 0 ? _a : (acc1[idPost] = { idPost: idPost, title: title, salary: salary, workLocation: workLocation, position: position, experience: experience, workTime: workTime, endTime: endTime, description: description, recruitmentsNumber: recruitmentsNumber, status: status, employerName: employerName, image: image, jobName: [] });
                if (Array.isArray(jobName))
                    acc1[idPost].jobName = acc1[idPost].jobName.concat(jobName);
                else
                    acc1[idPost].jobName.push(jobName);
                return acc1;
            }, {});
            return Object.values(result);
        };
        this.countPosts = async () => {
            try {
                let sql = `select count(idPost) from post`;
                return await this.postRepository.query(sql);
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
            console.log(post);
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
                   where (1 = 1) `;
            if (req.query.title !== undefined) {
                sql += `and title like '%${req.query.title}'`;
            }
            if (req.query.idPost !== undefined) {
                sql += `and idPost like '%${req.query.idPost}'`;
            }
            if (req.query.salary !== undefined) {
                sql += `and salary like '%${req.query.salary}'`;
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
            if (req.query.jobName !== undefined) {
                sql += `and jobName like '%${req.query.jobName}'`;
            }
            sql += `order by idPost DESC  `;
            let post = await this.postRepository.query(sql);
            const result = post.reduce((acc, { idPost, title, salary, workLocation, position, experience, workTime, endTime, description, recruitmentsNumber, status, employerName, image, jobName }) => {
                var _a;
                (_a = acc[idPost]) !== null && _a !== void 0 ? _a : (acc[idPost] = { idPost: idPost, title: title, salary: salary, workLocation: workLocation, position: position, experience: experience, workTime: workTime, endTime: endTime, description: description, recruitmentsNumber: recruitmentsNumber, status: status, employerName: employerName, image: image, jobName: [] });
                if (Array.isArray(jobName))
                    acc[idPost].jobName = acc[idPost].jobName.concat(jobName);
                else
                    acc[idPost].jobName.push(jobName);
                return acc;
            }, {});
            return Object.values(result);
        };
        this.postRepository = data_source_1.AppDataSource.getRepository(post_1.Post);
    }
}
exports.default = new PostService();
//# sourceMappingURL=postService.js.map