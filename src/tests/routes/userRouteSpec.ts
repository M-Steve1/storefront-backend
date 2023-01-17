import app from '../../server';
import supertest from 'supertest';
import { UserService } from '../../services/userService';

const userService = new UserService();
const request = supertest(app);

describe('User route', () => {
  it('Expects index endpoint to return 200 statusCode', async () => {
    const token = await userService.createToken({userId: '1'})
    request
    .get('/user/index')
    .set('Authorization', 'bearer ' + token)
    .expect(200);
  });
  it('Expects user/show/:id endpoint to return 200 statusCode', async () => {
    const token = await userService.createToken({userId: '1'})
    request
    .get('/user/show/1')
    .set('Authorization', 'bearer ' + token)
    .expect(200);
  });
  it('Expects signup endpoint not to return 201 statusCode', async () => {
    request
    .post('/user/signup')
    .send(
      {
        first_name: "Awe",
        last_name: "Lanre",
        user_name: "Alanre1",
        password: "password"
      }
    )
    .expect(201);
  });
  it('Expects signin endpoint to return 200 statusCode', async () => {
    request
    .post('/user/signin')
    .send(
      {
        user_name: "Msteve1",
        password: "password"
      }
    )
    .expect(200);
  });
});
