import { Schema, model } from 'mongoose'
import { IOrder } from './order.interface'

// Define the Order schema
const orderSchema = new Schema<IOrder>(
  {
    email: {
      type: String,
      required: true,
      validate: {
        validator: (email: string) => {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
          return emailRegex.test(email)
        },
        message: 'Invalid email format',
      },
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: 'product', // Refers to the Product model
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
      min: 1, // Minimum quantity is 1
    },
    totalPrice: {
      type: Number,
      required: true,
      min: 0, // Ensure total price is not negative
    },
  },
  {
    timestamps: true,
  }
)

// Create the Order model
const OrderModel = model<IOrder>('Order', orderSchema)

export default OrderModel
