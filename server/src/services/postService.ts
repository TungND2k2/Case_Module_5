import {AppDataSource} from "../data-source";
import {Post} from "../models/post";
import {Request, Response} from "express";
class PostService{
    private postRepository
    constructor() {
        this.postRepository = AppDataSource.getRepository(Post)
    }
    getAll = async () => {
        let sql = `select * from post join job_detail jd on post.idPost = jd.postId join job j on jd.jobId = j.jobId`;
        let posts = await this.postRepository.query(sql);
        if (!posts) {
            return 'No posts found'
        }
        return posts;
    }
    save = async (post) => {
        return   this.postRepository.save(post)
    }
    updatePost = async (idPost, newPost) => {
        let posts = await this.postRepository.findOneBy({idPost: idPost})
        if (!posts) {
            return null
        }
        return await this.postRepository.update({idPost: idPost}, newPost)
    }
    removePost = async (idPost) => {
        let posts = await this.postRepository.findOneBy({idPost : idPost});
        if(!posts){
            return null
        }
        return this.postRepository.delete({idPost : idPost});
    }
    findById = async (idPost)=> {
        let posts = await this.postRepository.findOneBy({idPost :idPost});
        if (!posts) {
            return null;
        }
        return posts
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
