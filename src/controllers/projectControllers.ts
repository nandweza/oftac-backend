import express from 'express';

import {
            createProject,
            getProjects,
            getProjectById,
            updateProject,
            deleteProjectById
        } from '../db/project';
import { upload } from '../middleware/uploadMiddleware';

export const newProject = async (req: express.Request, res: express.Response) => {
    try {
        upload(req, res, async (err) => {
            if(err) {
                console.error('File upload error:', err);
                return res.status(500).json({ message: 'An error occured' });
            }
        });

        const { title, content } = req.body;
        const file = req.file;

        if (!title || !content) {
            return res.status(400).json({ message: 'Missing title or content' });
        }

        const filePath = file.path;

        const project = await createProject({
            title,
            content,
            img: filePath
        });

        res.status(201).json(project);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'An error occured' });
    }
}

export const getAllProjects = async (req: express.Request, res: express.Response) => {
    try {
        const projects = await getProjects();

        res.status(200).json({ projects });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'An error occured' });
    }
}

export const getProject = async (req: express.Request, res: express.Response) => {
    try {
        const id: string = req.params.id;
        const project = await getProjectById(id);

        res.status(200).json({project});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'An eror occured' });
    }
}

export const updatedProject = async (req: express.Request, res: express.Response) => {
    try {
        upload(req, res, async (error) => {
            if (error) {
                return res.status(500).json({ message: 'An error occured' });
            }
        });

        const id: string = req.params.id;
        const { title, content } = req.body;
        const img = req.file?.filename;

        await updateProject(id, {title, content, img});

        res.status(200).json({ message: 'post updated!' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'An eror occured' });
    }
}

export const deleteProject = async (req: express.Request, res: express.Response) => {
    try {
        const id: string = req.params.id;

        await deleteProjectById(id);

        res.status(200).json({ message: 'Post deleted.' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'An error occured' });
    }
}