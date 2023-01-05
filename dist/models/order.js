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
exports.OrderStore = void 0;
const database_1 = __importDefault(require("../database"));
const orderService_1 = require("../services/orderService");
const orderService = new orderService_1.OrderService();
class OrderStore {
    create(o) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = 'INSERT INTO orders(product_id, product_quantity, user_id, status) VALUES($1, $2, $3, $4) RETURNING *';
                const conn = yield database_1.default.connect();
                const result = yield conn.query(sql, [o.product_id, o.product_quantity, o.user_id, o.status.toLowerCase()]);
                conn.release();
                return result.rows[0];
            }
            catch (error) {
                throw new Error(`Cannot create order${error}`);
            }
        });
    }
    addProduct(quantity, product_id, order_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const isActive = yield orderService.isOrderActive(order_id);
            if (isActive === 'active') {
                try {
                    const sql = 'INSERT INTO order_products(quantity, product_id, order_id) VALUES($1, $2, $3) RETURNING *';
                    const conn = yield database_1.default.connect();
                    const result = yield conn.query(sql, [quantity, product_id, order_id]);
                    conn.release();
                    return result.rows[0];
                }
                catch (error) {
                    throw new Error(`Cannot add product: ${error}`);
                }
            }
            else {
                throw new Error('Order is not active');
            }
        });
    }
}
exports.OrderStore = OrderStore;
