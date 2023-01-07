import express from 'express';
import bodyParser from 'body-parser';
import userRouter from './routes/userRoute';
import productRouter from './routes/productRoute';
import productServiceRouter from './routes/productServiceRoute';
import orderRoute from './routes/orderRoute';
import orderServiceRoute from './routes/orderServiceRoute';
import cors from 'cors';

const app: express.Application = express();
const address: string = '0.0.0.0:3000';

app.use(cors());
app.use(bodyParser.json());
app.use('/user', userRouter);
app.use('/product', productRouter, productServiceRouter);
app.use('/order', orderRoute, orderServiceRoute);

app.listen(3000, ()=> {
    console.log(`Listen on ${address}`);
});

export default app;