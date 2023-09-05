import dotenv from "dotenv";
import express from "express";
import jwt from "jsonwebtoken";
import { Response, NextFunction } from "express";

dotenv.config();

interface AuthenticatedRequest extends express.Request {
    user: {
        userId: string,
        username: string,
        password: string,
    }
}

export const authMiddleware = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
    const token = req.header('x-auth-token');

    if (!token) {
        return res.status(401).json({ message: 'Access denied' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: 'Invalid Token!!!' });
    }
}