import express from 'express';

import { register, login, resetPassword } from '../controllers/authControllers';

const router = express.Router();

router
    .route('/register')
    .post(register);

router
    .route('/login')
    .post(login);

router
    .route('/reset-password')
    .post(resetPassword);

export default router;
