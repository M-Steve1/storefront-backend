import supertest from "supertest";
import app from "../../server";

const request = supertest(app);

describe('Product route', () => {
    it('Expects index endpoint to return 200 statusCode', async () => {
        const response = await request.get('/product/index');
        expect(response.statusCode).toBe(200);
    });
    it('Expects show endpoint to return 200 statusCode', async () => {
        const response = await request.get('/product/show/1');
        expect(response.statusCode).toBe(200);
    });
    it('Expects create endpoint to return 201 statusCode', async () => {
        const response = await request.post('/product/create');
        expect(response.statusCode).toBe(201);
    });
})