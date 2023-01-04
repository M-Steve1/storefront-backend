"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../../models/user");
const userStore = new user_1.UserStore();
describe('User model', () => {
    it('Should have an index method', () => {
        expect(userStore.index).toBeDefined();
    });
    it('Should have create method', () => {
        expect(userStore.create).toBeDefined();
    });
    it('Should have show method', () => {
        expect(userStore.show).toBeDefined();
    });
});
