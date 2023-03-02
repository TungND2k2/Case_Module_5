"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const employerController_1 = __importDefault(require("../controllers/employerController"));
const employerController_2 = __importDefault(require("../controllers/employerController"));
const employerRouter = (0, express_1.Router)();
employerRouter.get('/', employerController_1.default.getAllEmployer);
employerRouter.put('/:id', employerController_1.default.editEmployer);
employerRouter.get('/findById/:id', employerController_2.default.findByIdEmployer);
employerRouter.post('/register', employerController_1.default.register);
employerRouter.post('/login', employerController_1.default.login);
exports.default = employerRouter;
//# sourceMappingURL=employer.js.map