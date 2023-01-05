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
    it('Should create a new order', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield orderStore.create({
            product_id: "7",
            product_quantity: 1,
            user_id: "19",
            status: "completed"
        });
        expect(result).toEqual({
            id: 4,
            product_id: "7",
            product_quantity: 1,
            user_id: "19",
            status: "completed"
        });
    }));
    fit('Should add a product to an active order', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield orderStore.addProduct(6, "8", "3");
        expect(result).toEqual({
            id: 1,
            quantity: 2,
            product_id: "4",
            order_id: "3"
        });
    }));
});
