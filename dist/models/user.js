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
exports.UserStore = void 0;
const database_1 = __importDefault(require("../database"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const config_1 = __importDefault(require("../config"));
const { pepper, saltRounds } = config_1.default;
class UserStore {
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = 'SELECT * FROM users';
                const conn = yield database_1.default.connect();
                const result = yield conn.query(sql);
                conn.release();
                return result.rows;
            }
            catch (error) {
                throw new Error(`Cannot fetch users ${error}`);
            }
        });
    }
    create(u) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const hashedPassword = bcrypt_1.default.hashSync(u.password + pepper, parseInt(saltRounds));
                const sql = 'INSERT INTO users(first_name, last_name, user_name, password) VALUES($1, $2, $3, $4) RETURNING *';
                const conn = yield database_1.default.connect();
                const result = yield conn.query(sql, [u.first_name, u.last_name, u.user_name, hashedPassword]);
                conn.release();
                return result.rows[0];
            }
            catch (error) {
                throw new Error(`Cannot create user ${error}`);
            }
        });
    }
    show(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = 'SELECT * FROM users WHERE id=($1)';
                const conn = yield database_1.default.connect();
                const result = yield conn.query(sql, [id]);
                conn.release();
                return result.rows[0];
            }
            catch (error) {
                throw new Error(`Cannot find user ${error}`);
            }
        });
    }
    authenticate(user_name, password) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = 'SELECT * FROM users WHERE user_name=($1)';
                const conn = yield database_1.default.connect();
                const result = yield conn.query(sql, [user_name]);
                conn.release();
                try {
                    const user = result.rows[0];
                    const correctPassword = yield bcrypt_1.default.compare(password + pepper, user.password);
                    if (correctPassword) {
                        return user;
                    }
                    else {
                        throw new Error('Cannot login');
                    }
                }
                catch (error) {
                    throw new Error(`Can't login: ${error}`);
                }
            }
            catch (error) {
                throw new Error(`Something went wrong: ${error}`);
            }
        });
    }
}
exports.UserStore = UserStore;
