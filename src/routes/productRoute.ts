import express from "express";
import { create, getProductById, index } from "../controllers/productController";

const productRouter = express.Router();

productRouter.get('/index', index);
productRouter.get('/show', getProductById);
productRouter.get('/create', create);

export default productRouter;