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
exports.ProductService = void 0;
const database_1 = __importDefault(require("../database"));
class ProductService {
    fiveMostPopularProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sqlOne = 'SELECT product_id, COUNT(product_id) AS most_popular FROM orders GROUP BY product_id ORDER BY most_popular DESC LIMIT 5';
                const sqlTWo = 'SELECT product_id, COUNT(product_id) AS most_popular FROM order_products GROUP BY product_id ORDER BY most_popular DESC LIMIT 5';
                const conn = yield database_1.default.connect();
                const resultOne = yield conn.query(sqlOne);
                const resultTwo = yield conn.query(sqlTWo);
                conn.release();
                const _resultOne = resultOne.rows;
                const _resultTwo = resultTwo.rows;
                const length = _resultOne.length;
                // Loop merges/pushes _resultTwo into _resultOne while adding the
                // duplicate.
                for (let i = 0; i < length; i++) {
                    for (let j = 0; j < length; j++) {
                        if (_resultOne[i].product_id === _resultTwo[j].product_id) {
                            _resultOne[i].most_popular = parseInt(_resultOne[i].most_popular) + parseInt(_resultTwo[j].most_popular);
                            break;
                        }
                        else {
                            // converts to integer
                            _resultOne[i].most_popular = parseInt(_resultOne[i].most_popular);
                        }
                    }
                    for (let k = 0; k < length; k++) {
                        if (_resultTwo[i].product_id !== _resultOne[k].product_id && (k === length - 1)) {
                            // converts to integer before pushing into _resultOne
                            _resultTwo[i].most_popular = parseInt(_resultTwo[i].most_popular);
                            _resultOne.push(_resultTwo[i]);
                        }
                        else if (_resultTwo[i].product_id === _resultOne[k].product_id) {
                            break;
                        }
                    }
                }
                // sorting in DESC order.
                _resultOne.sort((a, b) => { return b.most_popular - a.most_popular; });
                let fiveMostPopularProducts = [];
                for (let i = 0; i < 5; i++) {
                    const sql = 'SELECT name FROM products WHERE id=($1)';
                    const conn = yield database_1.default.connect();
                    const result = yield conn.query(sql, [_resultOne[i].product_id]);
                    conn.release();
                    fiveMostPopularProducts.push(result.rows[0]);
                }
                return fiveMostPopularProducts;
            }
            catch (error) {
                throw new Error(`Something went wrong ${error}`);
            }
        });
    }
    productsByCategory(category) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = 'SELECT * FROM products WHERE category=($1)';
                const conn = yield database_1.default.connect();
                const result = yield conn.query(sql, [category.toLowerCase()]);
                conn.release();
                return result.rows;
            }
            catch (error) {
                throw new Error(`${error}`);
            }
        });
    }
}
exports.ProductService = ProductService;
