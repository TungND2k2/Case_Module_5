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

    register = async (employer) => {
        employer.employerPassword = await bcrypt.hash(employer.employerPassword, 10)

        return this.employerRepository.save(employer)
    }

    checkUser = async (user) => {
        try {

            let userCheck = await this.employerRepository.findOneBy({employerName: user.employerName})

            if (!userCheck) {
                return "Wrong User"
            } else {
                let passwordCompare = await bcrypt.compare(user.employerPassword, userCheck.employerPassword)

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
        }catch (e) {
            console.log(e.message)
        }

    }
}

export default new AuthService()