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
const userService_1 = require("../../services/userService");
const userService = new userService_1.UserService();
fdescribe('User service', () => {
    it('Should return true if the user name is taken', () => __awaiter(void 0, void 0, void 0, function* () {
        const isTaken = yield userService.isUserNameTaken("Msteve1");
        expect(isTaken).toBe(true);
    }));
    it('Should return a token', () => __awaiter(void 0, void 0, void 0, function* () {
        const token = yield userService.createToken({ userId: "1" });
        expect(token).toEqual("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIyLCJpYXQiOjE2NzMxMjc1MTAsImV4cCI6MTY3MzEzMTExMH0.yYFunJAuMlARAw_IN43WXoIlkdpPRYosQu--7y6B2r8");
    }));
});
