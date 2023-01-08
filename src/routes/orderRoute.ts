import express from 'express';
import { addProduct, create } from '../controllers/orderController';
import { tokenAuth } from '../middleware/tokenAuth';

const orderRoute = express.Router();

orderRoute.post('/create', tokenAuth, create);
orderRoute.post('/:id/product', tokenAuth, addProduct);

export default orderRoute;