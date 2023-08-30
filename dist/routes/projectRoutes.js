"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const projectControllers_1 = require("../controllers/projectControllers");
const router = express_1.default.Router();
router
    .route('/')
    .post(projectControllers_1.newProject)
    .get(projectControllers_1.getAllProjects);
router
    .route('/:id')
    .get(projectControllers_1.getProject)
    .patch(projectControllers_1.updatedProject)
    .delete(projectControllers_1.deleteProject);
exports.default = router;
//# sourceMappingURL=projectRoutes.js.map