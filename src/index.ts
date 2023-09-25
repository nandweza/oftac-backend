import dotenv from 'dotenv';
import express from 'express';

const app = express();

import cors from 'cors';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes';
import postRoutes from './routes/postRoutes';
import projectRoutes from './routes/projectRoutes';
import contactRoutes from './routes/contactRoutes';
import userRoutes from './routes/userRoutes';

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});

app.use('/uploads', express.static('uploads'));

mongoose.set('strictQuery', true);
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("DB Connected Successfully"))
    .catch((err) => console.log(err));

app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);
app.use('/api/project', projectRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/user', userRoutes);

export default app;
