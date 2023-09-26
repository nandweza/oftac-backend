"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const postControllers_1 = require("../controllers/postControllers");
const uploadMiddleware_1 = require("../middleware/uploadMiddleware");
const router = express_1.default.Router();
router
    .route('/')
    .post(uploadMiddleware_1.upload, postControllers_1.newPost)
    .get(postControllers_1.getAllPosts);
router
    .route('/:id')
    .get(postControllers_1.getPost)
    .patch(postControllers_1.updatedPost)
    .delete(postControllers_1.deletePost);
exports.default = router;
//# sourceMappingURL=postRoutes.js.map