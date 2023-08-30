import express from 'express'

import { getAllPosts, newPost, getPost, updatedPost, deletePost } from '../controllers/postControllers';

const router = express.Router();

router
    .route('/')
    .post(newPost)
    .get(getAllPosts);

router
    .route('/:id')
    .get(getPost)
    .patch(updatedPost)
    .delete(deletePost);

export default router;
