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
exports.addProduct = exports.create = void 0;
const order_1 = require("../models/order");
const orderStore = new order_1.OrderStore();
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { product_id, product_quantity, user_id, status } = req.body;
        const order = {
            product_id: product_id,
            product_quantity: product_quantity,
            user_id: user_id,
            status: status
        };
        const createdOrder = yield orderStore.create(order);
        res.status(201).json(createdOrder);
    }
    catch (error) {
        throw new Error(`Cannot create new order ${error}`);
    }
});
exports.create = create;
const addProduct = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const order_id = req.params.id;
        const { quantity, product_id } = req.body;
        const addedProduct = yield orderStore.addProduct(quantity, product_id, order_id);
        res.status(200).json(addedProduct);
    }
    catch (error) {
        throw new Error(`Cannot add product to the order ${error}`);
    }
});
exports.addProduct = addProduct;