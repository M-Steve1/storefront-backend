import supertest from "supertest";
import app from "../../server";

const request = supertest(app);

fdescribe('Order service route', () => {
    it('Expects /order/current_order/:id endpoint to return status code 200', async () => {
        const response = await request.get('/order/current_order/1');
        expect(response.statusCode).toBe(200);
    });
    it('Expects /order/completed_orders/:id endpoint to return status code 200', async () => {
        const response = await request.get('/order/completed_orders/19');
        expect(response.statusCode).toBe(200);
    })
})