import express from 'express';
import { getAllUsers, getUser, updatedUser } from '../controllers/userControllers';

const router = express.Router();

router
    .route('/')
    .get(getAllUsers);

router
    .route('/:username')
    .get(getUser);

router
    .route('/:id')
    .patch(updatedUser);

export default router;
