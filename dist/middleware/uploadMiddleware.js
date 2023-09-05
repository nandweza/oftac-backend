"use strict";
// import multer from 'multer';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
// const Storage = multer.diskStorage({
//     destination: 'uploads/',
//     filename: (req, file, cb) => {
//         cb(null, file.originalname);
//     }
// });
// export const upload = multer({ storage: Storage }).single('img');
const multer_1 = __importDefault(require("multer"));
const storage = multer_1.default.memoryStorage(); // Store the file in memory, not on disk
const upload = (0, multer_1.default)({ storage }).single('img');
exports.upload = upload;
//# sourceMappingURL=uploadMiddleware.js.map