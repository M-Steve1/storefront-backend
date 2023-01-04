"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.default = {
    host: process.env.PGHOST,
    envDB: process.env.PGENVDB,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,
    env: process.env.ENV,
    testDB: process.env.PGTESTDB,
    pepper: process.env.BCRYPTPASSWORD,
    saltRounds: process.env.SALTROUNDS,
    jwtSecret: process.env.JWTSECRET
};
