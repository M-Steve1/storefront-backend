import express from 'express';
import { addProduct, create } from '../controllers/orderController';

const orderRoute = express.Router();

orderRoute.post('/create', create);
orderRoute.post('/:id/product', addProduct);

export default orderRoute;