import app from '../../server';
import supertest from 'supertest';

const request = supertest(app);

describe('User route', () => {
    it('Expects index endpoint to return 200 statusCode', async () => {
        const response = await request.get('/index');
        expect(response.statusCode).toBe(200);
    });

    it('Expects show/:id endpoint to return 200 statusCode', async () => {
        const response = await  request.get('/show/1');
        expect(response.statusCode).toBe(200);
    });

    it('Expects signup endpoint to return 201 statusCode', async () => {
        const response = await request.post('/signup');
        expect(response.statusCode).toBe(201);
    })
})