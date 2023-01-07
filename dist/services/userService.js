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
exports.UserService = void 0;
const database_1 = __importDefault(require("../database"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const { jwtSecret } = config_1.default;
class UserService {
    isUserNameTaken(user_name) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = 'SELECT user_name FROM users';
                const conn = yield database_1.default.connect();
                const result = yield conn.query(sql);
                conn.release();
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
    }
    createToken(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const token = jsonwebtoken_1.default.sign(payload, jwtSecret, { expiresIn: "1hr" });
                return token;
            }
            catch (error) {
                throw new Error(`Could not create token ${error}`);
            }
        });
    }
}
exports.UserService = UserService;
