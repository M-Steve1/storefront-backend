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
exports.OrderService = void 0;
const database_1 = __importDefault(require("../database"));
class OrderService {
    isOrderActive(order_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = 'SELECT status FROM orders WHERE id=($1)';
                const conn = yield database_1.default.connect();
                const result = yield conn.query(sql, [order_id]);
                const orderStatus = result.rows[0].status;
                conn.release();
                return orderStatus;
            }
            catch (error) {
                throw new Error(`Cannot find order: ${error}`);
            }
        });
    }
    userCurrentOrder(user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = 'SELECT * FROM orders WHERE user_id=($1) AND status=($2) ORDER BY user_id DESC LIMIT 1';
                const conn = yield database_1.default.connect();
                const result = yield conn.query(sql, [user_id, 'active']);
                conn.release();
                return result.rows[0];
            }
            catch (error) {
                throw new Error(`Something went wrong ${error}`);
            }
        });
    }
    userCompletedOrders(user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = 'SELECT * FROM orders WHERE user_id=($1) AND status=($2)';
                const conn = yield database_1.default.connect();
                const result = yield conn.query(sql, [user_id, 'completed']);
                conn.release();
                return result.rows;
            }
            catch (error) {
                throw new Error(`Something went wrong ${error}`);
            }
        });
    }
}
exports.OrderService = OrderService;
