import supertest from 'supertest';
import app from '../../server';
import { UserService } from '../../services/userService';

const userService = new UserService();
const request = supertest(app);

describe('Order service route', () => {
  it('Expects /order/current_order/:id endpoint to return statusCode 200', async () => {
    const token = await userService.createToken({ userId: '1' });
    request
      .get('/order/current_order/1')
      .set('Authorization', 'bearer ' + token)
      .expect(200);
  });
  it('Expects /order/completed_orders/:id endpoint to return statusCode 404', async () => {
    const token = await userService.createToken({ userId: '1' });
    request
      .get('/order/completed_orders/1')
      .set('Authorization', 'bearer ' + token)
      .expect(404);
  });
});
