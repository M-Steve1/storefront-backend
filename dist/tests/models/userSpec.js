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
const user_1 = require("../../models/user");
const userStore = new user_1.UserStore();
// Note: Populate your database tables with data to use for testing.
// Make sure to setup/edit the specs with the data before running it.
// Using the specs below without editing will cause test to fail because
// they were setup base of the data contained in my database.
// Some of the test will fail because of the hashed password.
// One way to make the test pass, is to test without password hashing or return user without the password.
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
    it('Should have an authenticate method', () => {
        expect(userStore.authenticate).toBeDefined();
    });
    it('Create method should add a new user', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield userStore.create({
            first_name: 'Modebe',
            last_name: 'Stephen',
            user_name: 'Msteve4',
            password: 'password'
        });
        expect(result).toEqual({
            id: 21,
            first_name: 'modebe',
            last_name: 'stephen',
            user_name: 'Msteve4',
            password: 'password'
        });
    }));
    it('Index method should return the list of all users', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield userStore.index();
        expect(result).toEqual([
            {
                id: 1,
                first_name: 'Modebe',
                last_name: 'Stephen',
                user_name: 'Msteve1',
                password: '$2b$10$J5exkpdC7cQOFhMEJ.NvjO38krXwUCeJ60g/XOnHCohiBlJjd/tQC'
            }
        ]);
    }));
    it('Show method should return specified(id) user', () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield userStore.show('1');
        expect(result).toEqual({
            id: 1,
            first_name: 'Modebe',
            last_name: 'Stephen',
            user_name: 'Msteve1',
            password: '$2b$10$J5exkpdC7cQOFhMEJ.NvjO38krXwUCeJ60g/XOnHCohiBlJjd/tQC'
        });
    }));
    it(`Should login the user if the details are correct`, () => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield userStore.authenticate('Msteve1', 'password');
        expect(result).toEqual({
            id: 1,
            first_name: 'Modebe',
            last_name: 'Stephen',
            user_name: 'Msteve1',
            password: '$2b$10$J5exkpdC7cQOFhMEJ.NvjO38krXwUCeJ60g/XOnHCohiBlJjd/tQC'
        });
    }));
});
