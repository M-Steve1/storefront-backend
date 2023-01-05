import { isUserNameTaken } from "../../services/userService"

describe('User service', () => {
    it('Should return true if the user name is taken', async () => {
        const isTaken = await isUserNameTaken("Msteve1");
        expect(isTaken).toBe(true);
    })
})