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
exports.userCompletedOrders = exports.userCurrentOrder = void 0;
const orderService_1 = require("../services/orderService");
const orderService = new orderService_1.OrderService();
const userCurrentOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user_id = req.params.id;
        const currentOrder = yield orderService.userCurrentOrder(user_id);
        res.status(200).json(currentOrder);
    }
    catch (error) {
        throw new Error(`Cannot get current Order: ${error}`);
    }
});
exports.userCurrentOrder = userCurrentOrder;
const userCompletedOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user_id = req.params.id;
        const completedOrder = yield orderService.userCompletedOrders(user_id);
        res.status(200).json(completedOrder);
    }
    catch (error) {
        throw new Error(`Something went wrong: ${error}`);
    }
});
exports.userCompletedOrders = userCompletedOrders;
