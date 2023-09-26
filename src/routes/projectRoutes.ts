import express from 'express'
import path from 'path';
import { upload } from '../middleware/uploadMiddleware';

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
    .post(upload, newProject)
    .get(getAllProjects);

router
    .route('/:id')
    .get(getProject)
    .patch(updatedProject)
    .delete(deleteProject);

export default router;
