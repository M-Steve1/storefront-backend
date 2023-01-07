import { UserService } from "../../services/userService"

const userService = new UserService();

describe('User service', () => {
    it('Should return true if the user name is taken', async () => {
        const isTaken = await userService.isUserNameTaken("Msteve1");
        expect(isTaken).toBe(true);
    })
})