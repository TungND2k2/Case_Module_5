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
        this.findById = async (id) => {
            let user = await this.userRepository.findOneBy({ idUser: id });
            if (!user) {
                return null;
            }
            return user;
        };
        this.update = async (id, newUser) => {
            return await this.userRepository.update({ idUser: id }, newUser);
        };
        this.checkUser = async (user) => {
            let userCheck = await this.userRepository.findOneBy({ username: user.username });
            if (!userCheck) {
                return 'User is not exit';
            }
            else {
                let passwordCompare = await bcrypt_1.default.compare(user.userPassword, userCheck.userPassword);
                if (!passwordCompare) {
                    return 'Password is wrong';
                }
                else {
                    let payload = {
                        idUser: userCheck.idUser,
                        username: userCheck.username,
                    };
                    return {
                        idUser: userCheck.idUser,
                        username: userCheck.username,
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
        this.checkChangePassword = async (id, oldPassword, newPassword) => {
            let user = {
                check: false,
                userFind: []
            };
            let userFind = await this.userRepository.findBy({ idUser: id });
            if (userFind.length === 0) {
                user.check = false;
            }
            else {
                let compare = await bcrypt_1.default.compare(oldPassword, userFind[0].userPassword);
                if (!compare) {
                    user.userFind = userFind;
                    user.check = false;
                }
                if (compare) {
                    newPassword = await bcrypt_1.default.hash(newPassword, 10);
                    await this.userRepository.update({ idUser: id }, { userPassword: newPassword });
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