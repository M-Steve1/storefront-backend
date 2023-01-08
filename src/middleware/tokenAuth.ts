import { Request, Response, NextFunction } from "express";
import jwt  from "jsonwebtoken";
import env from '../config';

const {jwtSecret} = env;

export const tokenAuth = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const authorizationHeader = req.headers.authorization;
        const token = authorizationHeader?.split(' ')[1];
        jwt.verify(token as string, jwtSecret as string);
        next();
    } catch (error) {
        throw new Error(`Un-authorized: ${error}`);
    }
}