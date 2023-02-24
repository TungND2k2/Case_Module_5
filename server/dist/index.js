"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const express_session_1 = __importDefault(require("express-session"));
const data_source_1 = require("./src/data-source");
const cors_1 = __importDefault(require("cors"));
const employer_1 = __importDefault(require("./src/routes/employer"));
const app = (0, express_1.default)();
data_source_1.AppDataSource.initialize().then(() => {
    console.log('Connect database success');
});
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static('./public'));
app.use((0, express_session_1.default)({
    resave: true,
    saveUninitialized: true,
    secret: 'somesecret',
    cookie: { maxAge: 100000 }
}));
app.use('', employer_1.default);
app.listen(4000, () => {
    console.log('Server is running');
});
//# sourceMappingURL=index.js.map