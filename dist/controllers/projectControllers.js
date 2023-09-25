"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProject = exports.updatedProject = exports.getProject = exports.getAllProjects = exports.newProject = void 0;
const project_1 = require("../db/project");
const uploadMiddleware_1 = require("../middleware/uploadMiddleware");
const newProject = async (req, res) => {
    try {
        (0, uploadMiddleware_1.upload)(req, res, async (err) => {
            if (err) {
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
        const project = await (0, project_1.createProject)({
            title,
            content,
            img: filePath
        });
        res.status(201).json(project);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'An error occured' });
    }
};
exports.newProject = newProject;
const getAllProjects = async (req, res) => {
    try {
        const projects = await (0, project_1.getProjects)();
        res.status(200).json({ projects });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'An error occured' });
    }
};
exports.getAllProjects = getAllProjects;
const getProject = async (req, res) => {
    try {
        const id = req.params.id;
        const project = await (0, project_1.getProjectById)(id);
        res.status(200).json({ project });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'An eror occured' });
    }
};
exports.getProject = getProject;
const updatedProject = async (req, res) => {
    try {
        (0, uploadMiddleware_1.upload)(req, res, async (error) => {
            if (error) {
                return res.status(500).json({ message: 'An error occured' });
            }
        });
        const id = req.params.id;
        const { title, content } = req.body;
        const img = req.file?.filename;
        await (0, project_1.updateProject)(id, { title, content, img });
        res.status(200).json({ message: 'post updated!' });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'An eror occured' });
    }
};
exports.updatedProject = updatedProject;
const deleteProject = async (req, res) => {
    try {
        const id = req.params.id;
        await (0, project_1.deleteProjectById)(id);
        res.status(200).json({ message: 'Post deleted.' });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'An error occured' });
    }
};
exports.deleteProject = deleteProject;
//# sourceMappingURL=projectControllers.js.map