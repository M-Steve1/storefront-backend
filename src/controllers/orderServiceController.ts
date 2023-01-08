import { Request, Response } from 'express';
import { OrderService } from '../services/orderService';

const orderService = new OrderService();

export const userCurrentOrder = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const user_id = req.params.id;
    const currentOrder = await orderService.userCurrentOrder(user_id);
    if (currentOrder === undefined) {
      res.status(404).json("You don't have any current order");
    } else {
      res.status(200).json(currentOrder);
    }
  } catch (error) {
    throw new Error(`Cannot get current Order: ${error}`);
  }
};

export const userCompletedOrders = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const user_id = req.params.id;
    const completedOrder = await orderService.userCompletedOrders(user_id);
    if (completedOrder.length === 0) {
      res.status(404).json('You have no completed order(s)');
    } else {
      res.status(200).json(completedOrder);
    }
  } catch (error) {
    throw new Error(`Something went wrong: ${error}`);
  }
};
