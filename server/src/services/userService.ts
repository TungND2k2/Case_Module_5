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


    checkUser = async (user) => {
        let userCheck = await this.userRepository.findOneBy({email: user.email})
        if (!userCheck) {
            return 'Email is not exit';
        }else {
            let passwordCompare = await bcrypt.compare(user.userPassword, userCheck.userPassword);
            if (!passwordCompare){
                return 'Password is wrong'
            }else {
                let payload = {
                    idUser: userCheck.id,
                    email :userCheck.email,
                }
                return {
                    idUser: userCheck.id,
                    email: userCheck.email,
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
    checkChangePassword = async (idUser, oldPassword, newPassword) => {
        let user = {
            check: false,
            userFind: []
        }
        let userFind = await this.userRepository.findBy({id: idUser})
        if (userFind.length === 0) {
            user.check = false;
        } else {
            let compare = await bcrypt.compare(oldPassword, userFind[0].password)
            if (!compare) {
                user.userFind = userFind
                user.check = false;
            }
            if (compare) {
                newPassword = await bcrypt.hash(newPassword, 10)
                await this.userRepository.update({id: idUser}, {password: newPassword})
                user.check = true;
                user.userFind = userFind
            }
        }
        return user
    }

}
export default new UserService();
