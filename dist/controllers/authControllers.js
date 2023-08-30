"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetPassword = exports.login = exports.register = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
dotenv_1.default.config();
const user_1 = require("../db/user");
const jwtSecret = process.env.JWT_SECRET;
const register = async (req, res) => {
    try {
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ message: 'Missing username or password' });
        }
        const salt = await bcrypt_1.default.genSalt(10);
        const hashedPassword = await bcrypt_1.default.hash(password, salt);
        const user = await (0, user_1.createUser)({
            username,
            password: hashedPassword
        });
        return res.status(201).json(user).end();
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'An error occured' });
    }
};
exports.register = register;
const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await (0, user_1.getUserByUsername)(username);
        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }
        ;
        const comparePassword = await bcrypt_1.default.compare(password, user.password);
        if (!comparePassword) {
            return res.status(401).json({ message: 'Incorrect password' });
        }
        const token = jsonwebtoken_1.default.sign({ userId: user._id }, jwtSecret, { expiresIn: '1hr' });
        res.status(200).json({ message: 'Login success', token });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'An error occured' });
    }
};
exports.login = login;
const resetPassword = async (req, res) => {
    try {
        const { username, newPassword } = req.body;
        const user = await (0, user_1.getUserByUsername)(username);
        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }
        const salt = await bcrypt_1.default.genSalt(10);
        const hashedPassword = await bcrypt_1.default.hash(newPassword, salt);
        user.password = hashedPassword;
        await user.save();
        res.status(200).json({ message: 'Password reset success' });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'An error occured' });
    }
};
exports.resetPassword = resetPassword;
//# sourceMappingURL=authControllers.js.map