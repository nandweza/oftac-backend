import express from 'express'

import { 
        newProject, 
        getAllProjects, 
        getProject, 
        updatedProject, 
        deleteProject 
    } from '../controllers/projectControllers';

const router = express.Router();

router
    .route('/')
    .post(newProject)
    .get(getAllProjects);

router
    .route('/:id')
    .get(getProject)
    .patch(updatedProject)
    .delete(deleteProject);

export default router;
