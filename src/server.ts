import express from 'express';
import bodyParser from 'body-parser';

const app: express.Application = express();
const address: string = '0.0.0.0:3000';

app.use(bodyParser.json());

app.listen(3000, ()=> {
    console.log(`Listen on ${address}`);
});