import { IProduct } from "./product.interface"
import ProductModel from "./product.model"

const createProd = async (query: IProduct): Promise<IProduct>=>{
    const result = await ProductModel.create(query)
    return result
}

export  const productService = {
    createProd,
}