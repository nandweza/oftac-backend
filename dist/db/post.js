"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePostById = exports.updatePost = exports.createPost = exports.getPostById = exports.getPosts = exports.PostModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const PostSchema = new mongoose_1.default.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    img: {
        type: String,
    },
    content: {
        type: String,
        required: true
    }
}, { timestamps: true });
exports.PostModel = mongoose_1.default.model('Post', PostSchema);
const getPosts = () => exports.PostModel.find();
exports.getPosts = getPosts;
const getPostById = (id) => exports.PostModel.findById(id);
exports.getPostById = getPostById;
const createPost = (values) => new exports.PostModel(values)
    .save().then((post) => post.toJSON());
exports.createPost = createPost;
const updatePost = (id, values) => exports.PostModel.findByIdAndUpdate(id, values);
exports.updatePost = updatePost;
const deletePostById = (id) => exports.PostModel.findByIdAndDelete(id);
exports.deletePostById = deletePostById;
//# sourceMappingURL=post.js.map