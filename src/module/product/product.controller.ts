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


// get product
const getProduct = async (req:Request, res:Response)=>{
    try {
     const result = await productService.getProd();
     res.send({
         message:'Bikes retrieved successfully',
         status:true,
         data:result
     })
    } catch (error) {
     res.json({
         message:'No data found',
         success:false,
         error
     })
    }
 }


 // get single product
const getSingleProduct = async (req:Request, res:Response)=>{
    try {
    const id = req.params.productId
    const result = await productService.getSingleProduct(id);
    res.send({
         message:'Bikes retrieved successfully',
         status:true,
         data:result
     })
    } catch (error) {
     res.json({
         message:'No data found',
         success:false,
         error
     })
    }
 }



 // Update single product
const updateProduct = async (req:Request, res:Response)=>{
    try {
    const id = req.params.productId
    const data = req.body
     const result = await productService.UpdateProduct(id,data);
     res.send({
         message:'Bike updated successfully',
         status:true,
         data:result
     })
    } catch (error) {
     res.json({
         message:'No data found',
         success:false,
         error
     })
    }
 }


 // get single product
const deleteProduct = async (req:Request, res:Response)=>{
    try {
    const id = req.params.productId
     const result = await productService.DeleteProduct(id);
     res.send({
         message:'Bike deleted successfully',
         status:true,
         data:{}
     })
    } catch (error) {
     res.json({
         message:'No data found',
         success:false,
         error
     })
    }
 }


export const productController = {
    createProduct,
    getProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct
}