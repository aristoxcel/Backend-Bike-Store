import { Router } from 'express'
import { orderController } from './order.controller'

const orderRouter = Router()

// Define router -> router.get('path', )
orderRouter.post('/', orderController.createOrder)
orderRouter.get('/revenue', orderController.revenue)

export default orderRouter
