import {Employer} from "../models/employer";
import {AppDataSource} from "../data-source";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import {SECRET} from "../middleware/auth";

class AuthService {
    private employerRepository;
    constructor() {
        this.employerRepository = AppDataSource.getRepository(Employer);
    }
    getAll = async ()=>{
        let sql = `select * from employer`;
        let employers = await this.employerRepository.query(sql);
        if (!employers) {
            return 'No job found'
        }
        return employers;
    }
    findById = async (id)=> {
        let employer = await this.employerRepository.findOneBy({idEmployer:id});
        if(!employer){
            return null;
        }
        return employer;
    }
    update = async (id, newEmployer)=> {
        return await this.employerRepository.update({idEmployer: id}, newEmployer);
    }

    register = async (employer) => {
        employer.employerPassword = await bcrypt.hash(employer.employerPassword, 10)

        return this.employerRepository.save(employer)
    }

    checkUser = async (employer) => {
            let userCheck = await this.employerRepository.findOneBy({employerName: employer.employerName})

            if (!userCheck) {
                return "Wrong User"
            } else {
                let passwordCompare = await bcrypt.compare(employer.employerPassword, userCheck.employerPassword)
                if (!passwordCompare) {
                    return 'Wrong Password'
                }else {
                    let payload = {
                        id_employer: userCheck.idEmployer,
                        userName: userCheck.employerName,

                    }
                    const token = jwt.sign(payload, SECRET, {
                        expiresIn: 36000
                    })
                    const check = {
                        token: token,
                        id_employer: userCheck.idEmployer,
                        employerName: userCheck.employerName,

                    }
                    return check;
                }
            }
        }
}

export default new AuthService()