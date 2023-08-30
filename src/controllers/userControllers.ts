import express from 'express';
import bcrypt from 'bcrypt';
import { getUserByUsername, getUsers, updateUser, resetPasswordById } from '../db/user';

export const getUser = async (req: express.Request, res: express.Response) => {
    try {
        const username: string = req.params.username;
        const user = await getUserByUsername(username);

        res.status(200).json({ user });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'An error occured' });
    }
}

export const getAllUsers = async (req: express.Request, res: express.Response) => {
    try {
        const users = await getUsers();

        res.status(200).json({ users });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'An error occured' });
    }
}

export const updatedUser = async (req: express.Request, res: express.Response) => {
    try {
        const id: string = req.params.id;
        const { username } = req.body;

        await updateUser(id, {username});

        res.status(200).json({ message: 'User updated'});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'An error occured' });
    }
}
