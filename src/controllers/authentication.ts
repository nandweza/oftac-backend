import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { createUser, getUserByUsername } from '../db/user';

const jwtSecret = 'my-little-damage';

export const register = async (req: express.Request, res: express.Response) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: 'Missing username or password' })
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await createUser({
            username,
            password: hashedPassword
        });

        return res.status(201).json(user).end();
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'An error occured' });
    }
}

export const login = async (req: express.Request, res: express.Response) => {
    try {
        const { username, password } =req.body;

        const user = await getUserByUsername(username);

        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        };

        const comparePassword = await bcrypt.compare(password, user.password);

        if (!comparePassword) {
            return res.status(401).json({ message: 'Incorrect password' });
        }

        const token = jwt.sign({userId: user._id}, jwtSecret, { expiresIn: '1hr' });

        res.status(200).json({ message: 'Login success', token });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'An error occured' });
    }
}