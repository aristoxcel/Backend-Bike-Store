
import express, { Request, Response } from 'express'
// import cors from 'cors';
import productRouter from './module/product/product.router'
import orderRouter from './module/order/order.router';
const app = express()
// app.use(cors());
// middleweare
app.use(express.json());

app.use("/api/products", productRouter)
app.use("/api/orders", orderRouter)

app.get('/', (req:Request, res:Response)=> {
  res.send({
    status:true,
    message: 'Hello World!'
  })
})

export default app;