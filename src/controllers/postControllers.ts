import express from 'express';

import { 
            PostModel, 
            // getPosts, 
            getPostById, 
            updatePost, 
            deletePostById 
        } from '../db/post';
import { upload } from '../middleware/uploadMiddleware';

export const newPost = async (req: express.Request, res: express.Response) => {
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

        const posts = new PostModel({
            title,
            content,
            img
        });

        posts.save();

        res.status(201).json(posts);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'An error occured' });
    }
}

export const getAllPosts = async (req: express.Request, res: express.Response) => {
    try {
        const posts = await PostModel.find();

        res.status(200).json({ posts });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'An error occured' });
    }
}

export const getPost = async (req: express.Request, res: express.Response) => {
    try {
        const id: string = req.params.id;
        const post = await getPostById(id);

        res.status(200).json({post});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'An eror occured' });
    }
}

export const updatedPost = async (req: express.Request, res: express.Response) => {
    try {
        upload(req, res, async (error) => {
            if (error) {
                return res.status(500).json({ message: 'An error occured' });
            }
        });

        const id: string = req.params.id;
        const { title, content } = req.body;
        const img = req.file?.fieldname;

        await updatePost(id, {title, content, img});

        res.status(200).json({ message: 'post updated!' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'An eror occured' });
    }
}

export const deletePost = async (req: express.Request, res: express.Response) => {
    try {
        const id: string = req.params.id;

        await deletePostById(id);

        res.status(200).json({ message: 'Post deleted.' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'An error occured' });
    }
}