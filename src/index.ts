import express from 'express';

const app = express();

import cors from 'cors';
import mongoose from 'mongoose';
import router from './router';


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});

mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost:27017/oftacDB");
mongoose.connection.on('error', (error: Error) => console.log(error));

app.use('/', router());

export default app;
