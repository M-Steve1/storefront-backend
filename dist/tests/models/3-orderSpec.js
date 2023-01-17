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
const order_1 = require("../../models/order");
const orderStore = new order_1.OrderStore();
fdescribe('Order model', () => {
    it('Should have a create method', () => {
        expect(orderStore.create).toBeDefined();
    });
    it('Should have a addProduct method', () => {
        expect(orderStore.addProduct).toBeDefined();
    });
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield orderStore.create({
            product_id: '1',
            product_quantity: 3,
            user_id: '1',
            status: 'active'
        });
        expect(result).toEqual({
            id: 1,
            product_id: '1',
            product_quantity: 3,
            user_id: '1',
            status: 'active'
        });
    }));
    it('Should add a product to an active order', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield orderStore.addProduct(3, '1', '1');
        expect(result).toEqual({
            id: 1,
            quantity: 3,
            product_id: '1',
            order_id: '1'
        });
    }));
});
