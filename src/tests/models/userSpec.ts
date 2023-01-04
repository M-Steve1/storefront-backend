import { UserStore } from "../../models/user"

const userStore = new UserStore();

describe('User model', () => {
    it('Should have an index method', () => {
        expect(userStore.index).toBeDefined();
    });
    it('Should have create method', () => {
        expect(userStore.create).toBeDefined();
    });
    it('Should have show method', () => {
        expect(userStore.show).toBeDefined();
    })
})