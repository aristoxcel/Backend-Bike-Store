import { IProduct } from "./product.interface"
import ProductModel from "./product.model"

const createProd = async (query: IProduct): Promise<IProduct>=>{
    const result = await ProductModel.create(query)
    return result
}

const getProd = async ()=>{
    const result = await ProductModel.find()
    return result
}


const getSingleProduct = async (id:string)=>{
    const result = await ProductModel.findById(id)
    return result
}


const UpdateProduct = async (id:string, data:IProduct)=>{
    const result = await ProductModel.findByIdAndUpdate(id, data, {new:true})
    return result
}


const DeleteProduct = async (id:string)=>{
    const result = await ProductModel.findByIdAndDelete(id)
    return result
}

export  const productService = {
    createProd,
    getProd,
    getSingleProduct,
    UpdateProduct,
    DeleteProduct
}