import express from 'express';

const app = express();

import cors from 'cors';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes';
import postRoutes from './routes/postRoutes';
import projectRoutes from './routes/projectRoutes';
// import contactRoutes from './routes/contactRoutes';
import userRoutes from './routes/userRoutes';


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});

app.use('/uploads', express.static('uploads'));

mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost:27017/oftacDB");
mongoose.connection.on('error', (error: Error) => console.log(error));

app.use('/api/auth', authRoutes);
app.use('/api/post', postRoutes);
app.use('/api/project', projectRoutes);
// app.use('/api/contact', contactRoutes);
app.use('/api/user', userRoutes);

export default app;
