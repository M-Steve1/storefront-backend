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
    });

    it('Create method should add a new user', async () => {
        const result = await userStore.create({
            first_name: "Modebe",
            last_name: "Stephen",
            user_name: "Msteve1",
            password: "password"
        });
        expect(result).toEqual({
            id: 1,
            first_name: "Modebe",
            last_name: "Stephen",
            user_name: "Msteve1",
            password: "password"
        })
    });

    it('Index method should return the list of all users', async () => {
        const result = await userStore.index();
        expect(result).toEqual([{
            id: 1,
            first_name: "Modebe",
            last_name: "Stephen",
            user_name: "Msteve1",
            password: "$2b$10$J5exkpdC7cQOFhMEJ.NvjO38krXwUCeJ60g/XOnHCohiBlJjd/tQC"
        }])
    });

    it('Show method should return specified(id) user', async () => {
        const result = await userStore.show("1");
        expect(result).toEqual({
            id: 1,
            first_name: "Modebe",
            last_name: "Stephen",
            user_name: "Msteve1",
            password: "$2b$10$J5exkpdC7cQOFhMEJ.NvjO38krXwUCeJ60g/XOnHCohiBlJjd/tQC"
        })
    })
})