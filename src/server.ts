import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './routes/userRoute';
import productRouter from './routes/productRoute';

const app: express.Application = express();
const address: string = '0.0.0.0:3000';

app.use(bodyParser.json());
app.use('/user', userRouter);
app.use('/product', productRouter);

app.listen(3000, ()=> {
    console.log(`Listen on ${address}`);
});

export default app;