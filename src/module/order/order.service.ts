import OrderModel from './order.model'
import ProductModel from '../product/product.model'
import { IOrder } from './order.interface'

const createOrder = async (orderData: IOrder): Promise<IOrder> => {
  const { email, product, quantity } = orderData

  // Check if the product exists
  const productDoc = await ProductModel.findById(product)
  if (!productDoc) {
    throw new Error('Product not found')
  }

  // Check inventory
  if (productDoc.quantity < quantity) {
    throw new Error(
      `Insufficient stock. Available quantity: ${productDoc.quantity}`
    )
  }

  // Calculate total price
  const calculatedTotalPrice = productDoc.price * quantity

  // Create the order
  const order = new OrderModel({
    email,
    product,
    quantity,
    totalPrice: calculatedTotalPrice,
  })
  await order.save()

  // Update product inventory
  productDoc.quantity -= quantity
  productDoc.inStock = productDoc.quantity > 0 // Update inStock status
  await productDoc.save()

  return order
}

const calculateRevenue = async (): Promise<number> => {
  const revenueResult = await OrderModel.aggregate([
    {
      $group: {
        _id: null, // Group all documents
        totalRevenue: { $sum: '$totalPrice' }, // Sum up the totalPrice from all orders
      },
    },
  ])
  return revenueResult[0]?.totalRevenue || 0
}

export const orderService = {
  createOrder,
  calculateRevenue,
}
