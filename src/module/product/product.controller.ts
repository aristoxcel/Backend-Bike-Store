// req and res manager

import { Request, Response } from "express";
import {productService} from "./product.service"


const createProduct = async (req:Request, res:Response)=>{
   try {
    const query = req.body;
    const result = await productService.createProd(query);
    res.json({
        message:'Bike created successfully',
        success:true,
        data: result
    })
   } catch (error) {
    res.json({
        message:'Validation failed',
        success:false,
        error
    })
   }

}

export const productController = {
    createProduct
}