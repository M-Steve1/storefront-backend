import supertest from "supertest";
import app from "../../server";

const request = supertest(app);

describe('Product service route', () => {
    it('product/category/:category endpoint should return status code of 200', async () => {
        const response = await request.get('/product/category/games')
        expect(response.statusCode).toBe(200);
    })
})