import supertest from "supertest";
import app from "../../server";

const request = supertest(app);

describe('Order route', () => {
    it('Expects /order/create endpoint to return status code 201', async () => {
        const response = await request.post('/order/create');
        expect(response.statusCode).toBe(201)
    });

    it('Expects /order/:id/product endpoint to return status code of 200', async () => {
        const response = await request.post('/order/6/product');
        expect(response.statusCode).toBe(200);
    })
})