"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const userRouter = express_1.default.Router();
userRouter.get('/index', userController_1.index);
userRouter.get('/show/:id', userController_1.getUserById);
userRouter.post('/signup', userController_1.createUser);
userRouter.post('/signin', userController_1.authenticate);
exports.default = userRouter;
