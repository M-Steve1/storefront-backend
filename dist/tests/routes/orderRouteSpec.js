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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const server_1 = __importDefault(require("../../server"));
const userService_1 = require("../../services/userService");
const userService = new userService_1.UserService();
const request = (0, supertest_1.default)(server_1.default);
fdescribe('Order route', () => {
    it('Expects /order/create endpoint to return 201 statusCode', () => __awaiter(void 0, void 0, void 0, function* () {
        const token = yield userService.createToken({ userId: '1' });
        request
            .post('/order/create')
            .set('Authorization', 'bearer ' + token)
            .send({
            product_id: "1",
            product_quantity: 20,
            user_id: 1,
            status: "active"
        })
            .expect(201);
    }));
    it('Expects /order/:id/product endpoint to return 400 statusCode', () => __awaiter(void 0, void 0, void 0, function* () {
        const token = yield userService.createToken({ userId: '1' });
        const response = yield request
            .post('/order/1/product')
            .set('Authorization', 'bearer ' + token)
            .send({
            quantity: 5,
            product_id: "1"
        })
            .expect(400);
        expect(response.text).toEqual('"This product already exist in this order"');
    }));
});
