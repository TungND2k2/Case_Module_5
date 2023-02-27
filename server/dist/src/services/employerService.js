"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const employer_1 = require("../models/employer");
const data_source_1 = require("../data-source");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_1 = require("../middleware/auth");
class AuthService {
    constructor() {
        this.register = async (employer) => {
            employer.employerPassword = await bcrypt_1.default.hash(employer.employerPassword, 10);
            return this.employerRepository.save(employer);
        };
        this.checkUser = async (employer) => {
            let userCheck = await this.employerRepository.findOneBy({ employerName: employer.employerName });
            if (!userCheck) {
                return "Wrong User";
            }
            else {
                let passwordCompare = await bcrypt_1.default.compare(employer.employerPassword, userCheck.employerPassword);
                if (!passwordCompare) {
                    return 'Wrong Password';
                }
                else {
                    let payload = {
                        id_employer: userCheck.idEmployer,
                        userName: userCheck.employerName,
                    };
                    const token = jsonwebtoken_1.default.sign(payload, auth_1.SECRET, {
                        expiresIn: 36000
                    });
                    const check = {
                        token: token,
                        id_employer: userCheck.idEmployer,
                        employerName: userCheck.employerName,
                    };
                    return check;
                }
            }
        };
        this.employerRepository = data_source_1.AppDataSource.getRepository(employer_1.Employer);
    }
}
exports.default = new AuthService();
//# sourceMappingURL=employerService.js.map