import { Request, Response, RequestHandler } from "express";
import { orderService } from "./order.service";

export const createOrder: RequestHandler = async (req: Request, res: Response) => {
    try {
        const query = req.body
        const result = await orderService.createOrder(query);
        res.status(201).json({
            message: "Order created successfully",
            status: true,
            data: result,
        });
    } catch (error: any) {
        res.status(400).json({
            message: error.message || "Something went wrong",
            status: false,
        });
    }
};

export const revenue: RequestHandler = async (req: Request, res: Response) => {
    try {
        const totalRevenue = await orderService.calculateRevenue();
        res.status(200).json({
            message: "Revenue calculated successfully",
            status: true,
            data: { totalRevenue },
        });
    } catch (error: any) {
        res.status(400).json({
            message: error.message || "Something went wrong",
            status: false,
        });
    }
};

export const orderController = {
    createOrder,
    revenue,
};
