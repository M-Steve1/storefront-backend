import supertest from 'supertest';
import app from '../../server';
import { UserService } from '../../services/userService';

const userService = new UserService();
const request = supertest(app);

describe('Order route', () => {
  it('Expects /order/create endpoint to return 201 statusCode', async () => {
    const token = await userService.createToken({ userId: '1' });
    request
    .post('/order/create')
    .set('Authorization', 'bearer ' + token)
    .send({
      product_id: "1",
      product_quantity: 20,
      user_id: 1,
      status: "active"
    })
    .expect(201);
}
  )

  it('Expects /order/:id/product endpoint to return 400 statusCode', async () => {
    const token = await userService.createToken({ userId: '1' });
    const response = await request
    .post('/order/1/product')
    .set('Authorization', 'bearer ' + token)
    .send(
      {
        quantity: 5,
        product_id: "1"
      }
    )
    .expect(400);
    expect(response.text).toEqual('"This product already exist in this order"');
  });
});
