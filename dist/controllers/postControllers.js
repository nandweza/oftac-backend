"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePost = exports.updatedPost = exports.getPost = exports.getAllPosts = exports.newPost = void 0;
const post_1 = require("../db/post");
const uploadMiddleware_1 = require("../middleware/uploadMiddleware");
const newPost = async (req, res) => {
    try {
        // upload(req, res, async (err) => {
        //     if(err) {
        //         return res.status(500).json({ message: 'An error occured' });
        //     }
        // });
        const { title, content } = req.body;
        const img = req.file.filename;
        if (!title || !content) {
            return res.status(400).json({ message: 'Missing title or content' });
        }
        const posts = new post_1.PostModel({
            title,
            content,
            img
        });
        posts.save();
        res.status(201).json(posts);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'An error occured' });
    }
};
exports.newPost = newPost;
const getAllPosts = async (req, res) => {
    try {
        const posts = await (0, post_1.getPosts)();
        res.status(200).json({ posts });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'An error occured' });
    }
};
exports.getAllPosts = getAllPosts;
const getPost = async (req, res) => {
    try {
        const id = req.params.id;
        const post = await (0, post_1.getPostById)(id);
        res.status(200).json({ post });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'An eror occured' });
    }
};
exports.getPost = getPost;
const updatedPost = async (req, res) => {
    try {
        (0, uploadMiddleware_1.upload)(req, res, async (error) => {
            if (error) {
                return res.status(500).json({ message: 'An error occured' });
            }
        });
        const id = req.params.id;
        const { title, content } = req.body;
        const img = req.file?.fieldname;
        await (0, post_1.updatePost)(id, { title, content, img });
        res.status(200).json({ message: 'post updated!' });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'An eror occured' });
    }
};
exports.updatedPost = updatedPost;
const deletePost = async (req, res) => {
    try {
        const id = req.params.id;
        await (0, post_1.deletePostById)(id);
        res.status(200).json({ message: 'Post deleted.' });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'An error occured' });
    }
};
exports.deletePost = deletePost;
//# sourceMappingURL=postControllers.js.map