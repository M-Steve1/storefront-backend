import { Request, Response } from "express";
import { Order, OrderStore } from "../models/order";

const orderStore = new OrderStore();

export const create = async (req: Request, res: Response): Promise<void> => {
    try {
        const {product_id, product_quantity, user_id, status} = req.body;
        const order: Order = {
            product_id: product_id,
            product_quantity: product_quantity,
            user_id: user_id, 
            status: status
        }
        const createdOrder = await orderStore.create(order);
        res.status(201).json(createdOrder);
    } catch (error) {
        throw new Error(`Cannot create new order ${error}`);
    }
}

export const addProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const order_id = req.params.id;
        const {quantity, product_id} = req.body;
        const addedProduct = await orderStore.addProduct(quantity, product_id, order_id);
        res.status(200).json(addedProduct);
    } catch (error) {
        throw new Error(`Cannot add product to the order ${error}`);
    }
}