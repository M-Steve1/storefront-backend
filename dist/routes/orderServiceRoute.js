"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const orderServiceController_1 = require("../controllers/orderServiceController");
const orderServiceRoute = express_1.default.Router();
orderServiceRoute.get('/current_order/:id', orderServiceController_1.userCurrentOrder);
orderServiceRoute.get('/completed_orders/:id', orderServiceController_1.userCurrentOrder);
exports.default = orderServiceRoute;
