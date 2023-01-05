import express from "express";
import { userCurrentOrder } from "../controllers/orderServiceController";

const orderServiceRoute = express.Router();

orderServiceRoute.get('/current_order/:id', userCurrentOrder);
orderServiceRoute.get('/completed_orders/:id', userCurrentOrder);

export default orderServiceRoute;