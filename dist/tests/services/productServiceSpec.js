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
const productService_1 = require("../../services/productService");
const productService = new productService_1.ProductService();
describe('Produce service', () => {
    it('Should return the products under a specific category e.g Games', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield productService.productsByCategory("Games");
        expect(result).toEqual([
            {
                id: 1,
                name: "PS4",
                price: 265000,
                category: "games"
            },
            {
                id: 2,
                name: "PS4",
                price: 265000,
                category: "games"
            },
            {
                id: 3,
                name: "PS4",
                price: 400000,
                category: "games"
            },
            {
                id: 4,
                name: "PS5",
                price: 400000,
                category: "games"
            }
        ]);
    }));
    it('Should return the five most popular products', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield productService.fiveMostPopularProducts();
        expect(result).toEqual([
            {
                "name": "samsung z-fold2"
            },
            {
                "name": "PS5"
            },
            {
                "name": "t-shirt"
            },
            {
                "name": "coconut bread"
            },
            {
                "name": "iphone xr"
            }
        ]);
    }));
});
