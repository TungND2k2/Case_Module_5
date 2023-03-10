import {AppDataSource} from "../data-source";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import {SECRET} from "../middleware/auth";
import {User} from "../models/user";


class UserService {
    private userRepository;
    constructor() {
        this.userRepository = AppDataSource.getRepository(User)
    }
    getAll = async () => {
        return await this.userRepository.find() ;
    }
    findById = async (id)=> {
        let user = await this.userRepository.findOneBy({idUser:id});
        if(!user){
            return null;
        }
        return user;
    }
    update = async (id, newUser)=> {
        return await this.userRepository.update({idUser: id}, newUser);
    }


    checkUser = async (user) => {
        let userCheck = await this.userRepository.findOneBy({username: user.username})
        if (!userCheck) {
            return 'User is not exit';
        }else {
            let passwordCompare = await bcrypt.compare(user.userPassword, userCheck.userPassword);
            if (!passwordCompare){
                return 'Password is wrong'
            }else {
                let payload = {
                    idUser: userCheck.idUser,
                    username :userCheck.username,
                }
                return {
                    idUser: userCheck.idUser,
                    username: userCheck.username,
                    token: jwt.sign(payload, SECRET, {
                        expiresIn: 3000000
                    })
                }
            }
        }

    }
    register = async (user) =>{
        let userCheck = await this.userRepository.findOneBy({username: user.username})
        if (!userCheck) {
            user.userPassword = await bcrypt.hash(user.userPassword,10);
            return this.userRepository.save(user);
        }
        return 'Username registered';
    }
    checkChangePassword = async (id, oldPassword, newPassword) => {
        let user = {
            check: false,
            userFind: []
        }
        let userFind = await this.userRepository.findBy({idUser: id})
        if (userFind.length === 0) {
            user.check = false;
        } else {
            let compare = await bcrypt.compare(oldPassword, userFind[0].userPassword)
            if (!compare) {
                user.userFind = userFind
                user.check = false;
            }
            if (compare) {
                newPassword = await bcrypt.hash(newPassword, 10)
                await this.userRepository.update({idUser: id}, {userPassword: newPassword})
                user.check = true;
                user.userFind = userFind
            }
        }
        return user
    }

}
export default new UserService();
