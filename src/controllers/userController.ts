import {Request, Response} from 'express';
import { User, UserStore } from '../models/user';

const userStore = new UserStore();

export const index = async (req: Request, res: Response): Promise<void> => {
    try {
        const allUser = await userStore.index();
        res.status(200).json(allUser);
    } catch (error) {
        throw new Error(`Cannot get users: ${error}`);
    }
}

export const getUserById = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = req.params.id;
        const theUser = await userStore.show(userId);
        res.status(200).json(theUser);
    } catch (error) {
        throw new Error(`Cannot get the user: ${error}`);
    }
}

export const createUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const {first_name, last_name, user_name, password} = req.body;
        const user: User = {
            first_name: first_name,
            last_name: last_name,
            user_name: user_name,
            password: password
        };

        const createdUser = await userStore.create(user);
        res.status(201).json(createdUser);
    } catch (error) {
        throw new Error(`Could not create a user: ${error}`);
    }
}