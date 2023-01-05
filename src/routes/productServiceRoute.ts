import express from 'express';
import { productsByCategory } from '../controllers/productServiceController';

const productServiceRouter = express.Router();

productServiceRouter.get('/category/:category', productsByCategory);

export default productServiceRouter;