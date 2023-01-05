"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const orderController_1 = require("../controllers/orderController");
const orderRoute = express_1.default.Router();
orderRoute.post('/create', orderController_1.create);
orderRoute.post('/:id/product', orderController_1.addProduct);
exports.default = orderRoute;
