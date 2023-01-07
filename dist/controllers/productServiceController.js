"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fiveMostPopularProducts = exports.productsByCategory = void 0;
const productService_1 = require("../services/productService");
const productService = new productService_1.ProductService();
const productsByCategory = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const category = req.params.category;
        const products = yield productService.productsByCategory(category);
        if (products.length === 0) {
            throw new Error("category does not exist");
        }
        else {
            res.status(200).json(products);
        }
    }
    catch (error) {
        throw new Error(`${error}`);
    }
});
exports.productsByCategory = productsByCategory;
const fiveMostPopularProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const fiveMostPopular = yield productService.fiveMostPopularProducts();
        res.status(200).json(fiveMostPopular);
    }
    catch (error) {
        res.status(400).json(error);
    }
});
exports.fiveMostPopularProducts = fiveMostPopularProducts;
