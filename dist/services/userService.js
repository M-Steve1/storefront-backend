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
exports.isUserNameTaken = void 0;
const database_1 = __importDefault(require("../database"));
const isUserNameTaken = (user_name) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sql = 'SELECT user_name FROM users';
        const conn = yield database_1.default.connect();
        const result = yield conn.query(sql);
        const userNames = result.rows;
        let isTaken = false;
        for (let i = 0; i < userNames.length; i++) {
            if (user_name === userNames[i].user_name) {
                isTaken = true;
                break;
            }
        }
        return isTaken;
    }
    catch (error) {
        throw new Error(`Something went wrong ${error}`);
    }
});
exports.isUserNameTaken = isUserNameTaken;
