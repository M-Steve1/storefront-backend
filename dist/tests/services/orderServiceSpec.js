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
const orderService_1 = require("../../services/orderService");
const orderService = new orderService_1.OrderService();
fdescribe('Order Service', () => {
    it('Expects the order status to be active', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield orderService.isOrderActive('1');
        expect(result).toEqual('active');
    }));
    it('Should return the current active order of specified(id) user', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield orderService.userCurrentOrder('19');
        expect(result).toEqual({
            id: 2,
            product_id: '4',
            product_quantity: 5,
            user_id: '19',
            status: 'active'
        });
    }));
    it('Should return all the orders completed by the specified(id) user', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield orderService.userCompletedOrders('19');
        expect(result).toEqual([
            {
                id: 4,
                product_id: '7',
                product_quantity: 1,
                user_id: '19',
                status: 'completed'
            }
        ]);
    }));
    it('Should check if the product already exist in the order', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield orderService.isProductInCart('4', '2');
        expect(result).toBe(true);
    }));
});
