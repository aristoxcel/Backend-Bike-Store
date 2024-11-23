
import express, { Request, Response } from 'express'
import productRouter from './module/product/product.router'
const app = express()
app.use("api/v1/product", productRouter)

app.get('/', (req:Request, res:Response)=> {
  res.send({
    status:true,
    message: 'Hello World!'
  })
})

export default app;