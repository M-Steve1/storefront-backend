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
const product_1 = require("../../models/product");
const productStore = new product_1.ProductStore();
// Note: Populate your database tables with data to use for testing.
// Make sure to setup/edit the specs with the data before running it.
// Using the specs below without editing will cause test to fail because
// they were setup base on the data contained in my database.
describe('Product model', () => {
    it('Should have an index method', () => {
        expect(productStore.index).toBeDefined();
    });
    it('Should have a show method', () => {
        expect(productStore.show).toBeDefined();
    });
    it('Should have a create method', () => {
        expect(productStore.create).toBeDefined();
    });
    it('Should return all the products', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield productStore.index();
        expect(result).toEqual([]);
    }));
    it('Should return the specified(id) product', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield productStore.show('4');
        expect(result).toEqual({
            id: 4,
            name: 'PS5',
            price: 400000,
            category: 'Games'
        });
    }));
    it('Should create a product', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield productStore.create({
            name: 'PS5',
            price: 400000,
            category: 'Games'
        });
        expect(result).toEqual({
            id: 4,
            name: 'PS5',
            price: 400000,
            category: 'Games'
        });
    }));
});
