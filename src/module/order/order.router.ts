import { Router } from "express";
import { orderController } from "./order.controller";

const orderRouter = Router();

orderRouter.post('/', orderController.createOrder);
orderRouter.get('/revenue', orderController.revenue);

export default orderRouter;