import express from 'express';
import {
  fiveMostPopularProducts,
  productsByCategory
} from '../controllers/productServiceController';

const productServiceRouter = express.Router();

productServiceRouter.get('/category/:category', productsByCategory);
productServiceRouter.get('/five_most_popular_products', fiveMostPopularProducts);

export default productServiceRouter;
