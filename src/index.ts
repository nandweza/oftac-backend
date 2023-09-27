import dotenv from 'dotenv';
import express from 'express';
import path from 'path';

const app = express();

// Serve static files from the "uploads" directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

dotenv.config();

import cors from 'cors';
import mongoose from 'mongoose';
import authRoutes from './routes/authRoutes';
import postRoutes from './routes/postRoutes';
import projectRoutes from './routes/projectRoutes';
import contactRoutes from './routes/contactRoutes';
import userRoutes from './routes/userRoutes';


// Define a CSP policy that allows images from a specific domain
const cspConfig = {
    directives: {
      defaultSrc: ["'self'"],
      imgSrc: ["'self'", "https://oftac-backend.onrender.com"],
    },
  };
  
// Define a CSP policy that allows images from a specific domain
const cspValue = "default-src 'self'; img-src 'self' https://oftac-backend.onrender.com";

// Set CSP headers in your Express app
app.use((req, res, next) => {
  res.setHeader('Content-Security-Policy', cspValue);
  next();
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});

// app.use('/uploads', express.static('uploads'));

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
function getCSPString(cspConfig: { directives: { defaultSrc: string[]; imgSrc: string[]; }; }): string | number | readonly string[] {
    throw new Error('Function not implemented.');
}

