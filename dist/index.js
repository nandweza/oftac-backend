"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const app = (0, express_1.default)();
// Serve static files from the "uploads" directory
app.use('/uploads', express_1.default.static(path_1.default.join(__dirname, 'uploads')));
dotenv_1.default.config();
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const authRoutes_1 = __importDefault(require("./routes/authRoutes"));
const postRoutes_1 = __importDefault(require("./routes/postRoutes"));
const projectRoutes_1 = __importDefault(require("./routes/projectRoutes"));
const contactRoutes_1 = __importDefault(require("./routes/contactRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
// Define a CSP policy that allows images from a specific domain
const cspConfig = {
    directives: {
        defaultSrc: ["'self'"],
        imgSrc: ["'self'", "https://oftac-backend.onrender.com"],
    },
};
// Set CSP headers in your Express app
app.use((req, res, next) => {
    res.setHeader('Content-Security-Policy', getCSPString(cspConfig));
    next();
});
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});
// app.use('/uploads', express.static('uploads'));
mongoose_1.default.set('strictQuery', true);
mongoose_1.default.connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connected Successfully"))
    .catch((err) => console.log(err));
app.use('/api/auth', authRoutes_1.default);
app.use('/api/post', postRoutes_1.default);
app.use('/api/project', projectRoutes_1.default);
app.use('/api/contact', contactRoutes_1.default);
app.use('/api/user', userRoutes_1.default);
exports.default = app;
function getCSPString(cspConfig) {
    throw new Error('Function not implemented.');
}
//# sourceMappingURL=index.js.map