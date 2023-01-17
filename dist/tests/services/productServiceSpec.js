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
fdescribe('Produce service', () => {
    it('Should return the products under a specific category e.g games', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield productService.productsByCategory('games');
        expect(result).toEqual([
            {
                id: 1,
                name: 'ps5',
                price: 400000,
                category: 'games'
            },
        ]);
    }));
    it('Should return the five most popular products', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield productService.fiveMostPopularProducts();
        expect(result).toEqual([
            {
                name: 'ps5'
            }
        ]);
    }));
});
