import supertest from "supertest";
import app from "../../server";

const request = supertest(app);

fdescribe('Product service route', () => {
    it('Should return product/category/:category endpoint to return status code of 200', async () => {
        const response = await request.get('/product/category/games')
        expect(response.status).toBe(200);
    })
})