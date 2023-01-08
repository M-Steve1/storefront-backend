import express from 'express';
import {
  index,
  getUserById,
  createUser,
  authenticate
} from '../controllers/userController';
import { tokenAuth } from '../middleware/tokenAuth';

const userRouter = express.Router();

userRouter.get('/index', tokenAuth, index);
userRouter.get('/show/:id', tokenAuth, getUserById);
userRouter.post('/signup', createUser);
userRouter.post('/signin', authenticate);

export default userRouter;
