import { UserService } from "../../services/userService"

const userService = new UserService();

describe('User service', () => {
    it('Should return true if the user name is taken', async () => {
        const isTaken = await userService.isUserNameTaken("Msteve1");
        expect(isTaken).toBe(true);
    });
    it('Should return a token', async () => {
        const token = await userService.createToken({userId: "1"});
        expect(token).not.toEqual("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIyLCJpYXQiOjE2NzMxMjc1MTAsImV4cCI6MTY3MzEzMTExMH0.yYFunJAuMlARAw_IN43WXoIlkdpPRYosQu--7y6B2r8");
    })
})