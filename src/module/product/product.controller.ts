// req and res manager

import { Request, Response } from "express";
import Product from "./product.model";

const createProduct = async (req:Request, res:Response)=>{
    const query = req.body;

    const result = await Product.create(query);
    res.json({
        message:'User created',
        data: result
    })
}

export const productController = {
    createProduct
}