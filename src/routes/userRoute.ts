import express from "express";
import { index, getUserById, createUser, authenticate } from "../controllers/userController";

const userRouter = express.Router();

userRouter.get('/index', index);
userRouter.get('/show/:id', getUserById);
userRouter.post('/signup', createUser);
userRouter.post('/signin', authenticate);

export default userRouter;