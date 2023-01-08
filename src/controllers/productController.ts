import { Request, Response } from 'express';
import { Product, ProductStore } from '../models/product';

const productStore = new ProductStore();

export const index = async (req: Request, res: Response): Promise<void> => {
  try {
    const products = await productStore.index();
    res.status(200).json(products);
  } catch (error) {
    throw new Error(`cannot get products: ${error}`);
  }
};

export const getProductById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const id = req.params.id;
    const theProduct = await productStore.show(id);
    res.status(200).json(theProduct);
  } catch (error) {
    throw new Error(`cannot get the product: ${error}`);
  }
};

export const create = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, price, category } = req.body;
    const product: Product = {
      name: name,
      price: price,
      category: category
    };
    const createdProduct = await productStore.create(product);
    res.status(201).json(createdProduct);
  } catch (error) {
    throw new Error(`cannot create product: ${error}`);
  }
};
