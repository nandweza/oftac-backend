"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatedUser = exports.getAllUsers = exports.getUser = void 0;
const user_1 = require("../db/user");
const getUser = async (req, res) => {
    try {
        const username = req.params.username;
        const user = await (0, user_1.getUserByUsername)(username);
        res.status(200).json({ user });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'An error occured' });
    }
};
exports.getUser = getUser;
const getAllUsers = async (req, res) => {
    try {
        const users = await (0, user_1.getUsers)();
        res.status(200).json({ users });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'An error occured' });
    }
};
exports.getAllUsers = getAllUsers;
const updatedUser = async (req, res) => {
    try {
        const id = req.params.id;
        const { username } = req.body;
        await (0, user_1.updateUser)(id, { username });
        res.status(200).json({ message: 'User updated' });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'An error occured' });
    }
};
exports.updatedUser = updatedUser;
//# sourceMappingURL=userControllers.js.map