import {Request, Response} from 'express';
import { OrderService } from '../services/orderService';

const orderService = new OrderService();

export const userCurrentOrder = async (req: Request, res: Response): Promise<void> => {
    try {
        const user_id = req.params.id;
        const currentOrder = await orderService.userCurrentOrder(user_id);
        res.status(200).json(currentOrder);
    } catch (error) {
        throw new Error(`Cannot get current Order: ${error}`);
    }
}

export const userCompletedOrders = async (req: Request, res: Response): Promise<void> => {
    try {
        const user_id = req.params.id;
        const completedOrder = await orderService.userCompletedOrders(user_id);
        res.status(200).json(completedOrder);
    } catch (error) {
        throw new Error(`Something went wrong: ${error}`);
    }
}