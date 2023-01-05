import { Request, Response } from "express";
import { ProductService } from "../services/productService";

const productService = new ProductService();

export const productsByCategory = async (req: Request, res: Response): Promise<void> => {
    try {
        const category = req.params.category;
        const products = await productService.productsByCategory(category);
        res.status(200).json(products);
    } catch (error) {
        throw new Error(`${error}`);
    }
}