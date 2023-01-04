import app from '../../server';
import supertest from 'supertest';

const request = supertest(app);

fdescribe('User route', () => {
    it('Expects index endpoint to return 200 statusCode', async () => {
        const response = await request.get('/user/index');
        expect(response.statusCode).toBe(200);
    });

    it('Expects show/:id endpoint to return 200 statusCode', async () => {
        const response = await  request.get('/user/show/1');
        expect(response.statusCode).toBe(200);
    });

    it('Expects signup endpoint to return 201 statusCode', async () => {
        const response = await request.post('/user/signup');
        expect(response.statusCode).toBe(201);
    })
})