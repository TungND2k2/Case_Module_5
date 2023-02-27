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
                          image
                   from post p
                            join employer e on p.idEmployer = e.idEmployer
                   order by idPost DESC`;
            let post = await this.postRepository.query(sql);
            return post;
        };
        this.save = async (post) => {
            return this.postRepository.save(post);
        };
        this.update = async (id, newPost) => {
            let post = await this.postRepository.findOneBy({ idPost: id });
            if (!post) {
                return null;
            }
            console.log(newPost);
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
        this.findById = async (id) => {
            let post = await this.postRepository.findOneBy({ id: id });
            if (!post) {
                return null;
            }
            return post;
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
                          image
                   from post p join employer e on p.idEmployer = e.idEmployer
                               join job_detail jd on p.idPost = jd.postId
                               join job j on jd.jobId = j.jobId
                   where (1 = 1)`;
            if (req.query.title !== undefined) {
                sql += `and title like '%${req.query.title}'`;
            }
            if (req.query.salary !== undefined) {
                sql += `and salary like '%${req.query.salary}'`;
            }
            if (req.query.workLocation !== undefined) {
                sql += `and workLocation like '%${req.query.workLocation}'`;
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
            sql += `group by idPost order by idPost DESC`;
            let post = await this.postRepository.query(sql);
            return post;
        };
        this.postRepository = data_source_1.AppDataSource.getRepository(post_1.Post);
    }
}
exports.default = new PostService();
//# sourceMappingURL=postService.js.map