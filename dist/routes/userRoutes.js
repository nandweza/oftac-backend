"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userControllers_1 = require("../controllers/userControllers");
const router = express_1.default.Router();
router
    .route('/')
    .get(userControllers_1.getAllUsers);
router
    .route('/:username')
    .get(userControllers_1.getUser);
router
    .route('/:id')
    .patch(userControllers_1.updatedUser);
exports.default = router;
//# sourceMappingURL=userRoutes.js.map