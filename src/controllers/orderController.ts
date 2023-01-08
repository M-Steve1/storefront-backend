import { Request, Response } from 'express';
import { Order, OrderStore } from '../models/order';
import { OrderService } from '../services/orderService';

const orderStore = new OrderStore();
const orderService = new OrderService();

export const create = async (req: Request, res: Response): Promise<void> => {
  try {
    const { product_id, product_quantity, user_id, status } = req.body;
    const order: Order = {
      product_id: product_id,
      product_quantity: product_quantity,
      user_id: user_id,
      status: status
    };
    const createdOrder = await orderStore.create(order);
    res.status(201).json(createdOrder);
  } catch (error) {
    throw new Error(`Cannot create new order ${error}`);
  }
};

export const addProduct = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const order_id = req.params.id;
    const { quantity, product_id } = req.body;
    const productInCart = await orderService.isProductInCart(
      product_id,
      order_id
    );
    if (productInCart) {
      res.status(400).json('This product already exist in this order');
    } else {
      const addedProduct = await orderStore.addProduct(
        quantity,
        product_id,
        order_id
      );
      res.status(200).json(addedProduct);
    }
  } catch (error) {
    throw new Error(`Cannot add product to the order ${error}`);
  }
};
