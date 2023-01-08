import express from 'express';
import {
  userCompletedOrders,
  userCurrentOrder
} from '../controllers/orderServiceController';
import { idAuth } from '../middleware/idAuth';

const orderServiceRoute = express.Router();

orderServiceRoute.get('/current_order/:id', idAuth, userCurrentOrder);
orderServiceRoute.get('/completed_orders/:id', idAuth, userCompletedOrders);

export default orderServiceRoute;
