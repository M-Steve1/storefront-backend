import { Request, Response } from 'express';
import { ProductService } from '../services/productService';

const productService = new ProductService();

export const productsByCategory = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const category = req.params.category;
    const products = await productService.productsByCategory(category);
    if (products.length === 0) {
      throw new Error('category does not exist');
    } else {
      res.status(200).json(products);
    }
  } catch (error) {
    throw new Error(`${error}`);
  }
};

export const fiveMostPopularProducts = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const fiveMostPopular = await productService.fiveMostPopularProducts();
    res.status(200).json(fiveMostPopular);
  } catch (error) {
    res.status(400).json(error);
  }
};
