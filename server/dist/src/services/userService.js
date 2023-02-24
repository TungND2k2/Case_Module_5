"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth_1 = require("../middleware/auth");
const user_1 = require("../models/user");
class UserService {
    constructor() {
        this.getAll = async () => {
            return await this.userRepository.find();
        };
        this.checkUser = async (user) => {
            let userCheck = await this.userRepository.findOneBy({ email: user.email });
            if (!userCheck) {
                return 'Email is not exit';
            }
            else {
                let passwordCompare = await bcrypt_1.default.compare(user.userPassword, userCheck.userPassword);
                if (!passwordCompare) {
                    return 'Password is wrong';
                }
                else {
                    let payload = {
                        idUser: userCheck.id,
                        email: userCheck.email,
                    };
                    return {
                        idUser: userCheck.id,
                        email: userCheck.email,
                        token: jsonwebtoken_1.default.sign(payload, auth_1.SECRET, {
                            expiresIn: 3000000
                        })
                    };
                }
            }
        };
        this.register = async (user) => {
            let userCheck = await this.userRepository.findOneBy({ username: user.username });
            if (!userCheck) {
                user.userPassword = await bcrypt_1.default.hash(user.userPassword, 10);
                return this.userRepository.save(user);
            }
            return 'Username registered';
        };
        this.checkChangePassword = async (idUser, oldPassword, newPassword) => {
            let user = {
                check: false,
                userFind: []
            };
            let userFind = await this.userRepository.findBy({ id: idUser });
            if (userFind.length === 0) {
                user.check = false;
            }
            else {
                let compare = await bcrypt_1.default.compare(oldPassword, userFind[0].password);
                if (!compare) {
                    user.userFind = userFind;
                    user.check = false;
                }
                if (compare) {
                    newPassword = await bcrypt_1.default.hash(newPassword, 10);
                    await this.userRepository.update({ id: idUser }, { password: newPassword });
                    user.check = true;
                    user.userFind = userFind;
                }
            }
            return user;
        };
        this.userRepository = data_source_1.AppDataSource.getRepository(user_1.User);
    }
}
exports.default = new UserService();
//# sourceMappingURL=UserService.js.map