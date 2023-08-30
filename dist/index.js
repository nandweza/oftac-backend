"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const postRoutes_1 = __importDefault(require("./routes/postRoutes"));
const projectRoutes_1 = __importDefault(require("./routes/projectRoutes"));
// import contactRoutes from './routes/contactRoutes';
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});
app.use('/uploads', express_1.default.static('uploads'));
mongoose_1.default.Promise = Promise;
mongoose_1.default.connect("mongodb://localhost:27017/oftacDB");
mongoose_1.default.connection.on('error', (error) => console.log(error));
app.use('/api/auth', authRoutes_1.default);
app.use('/api/post', postRoutes_1.default);
app.use('/api/project', projectRoutes_1.default);
// app.use('/api/contact', contactRoutes);
app.use('/api/user', userRoutes_1.default);
exports.default = app;
//# sourceMappingURL=index.js.map