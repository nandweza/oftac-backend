"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
const storage = multer_1.default.diskStorage({
    destination: (req, file, callback) => {
        // Specify the directory where you want to store the uploaded files
        callback(null, 'uploads/'); // You can customize the path as needed
    },
    filename: (req, file, callback) => {
        // Specify how the file should be named
        callback(null, file.originalname); // You can customize the filename if needed
    },
});
const upload = (0, multer_1.default)({ storage }).single('img');
exports.upload = upload;
// import multer from 'multer';
// const storage = multer.memoryStorage(); // Store the file in memory, not on disk
// const upload = multer({ storage }).single('img');
// export { upload };
//# sourceMappingURL=uploadMiddleware.js.map