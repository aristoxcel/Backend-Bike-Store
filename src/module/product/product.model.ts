import { model, Schema } from 'mongoose'
import { IProduct } from './product.interface'

const productSchema = new Schema<IProduct>(
  {
    name: {
      type: String,
      required: [true, 'Please enter a valid name'], // Name is mandatory
      trim: true, // Removes extra spaces
    },
    brand: {
      type: String,
      required: true, // Brand is mandatory
    },
    price: {
      type: Number,
      required: true, // Price is mandatory
      min: 0, // Ensure price is not negative
    },
    category: {
      type: String,
      required: true,
      enum: {
        values: ['Mountain', 'Road', 'Hybrid', 'Electric'],
        message: '{VALUE} is not valid',
      }, // Restrict to exact values
      default: 'Mountain',
    },
    description: {
      type: String,
      required: false, // Description is optional
      trim: true, // Removes extra spaces
    },
    quantity: {
      type: Number,
      required: true, // Quantity is mandatory
      min: 0, // Ensure quantity is not negative
    },
    inStock: {
      type: Boolean,
      required: true, // InStock is mandatory
      default: true, // Default value is `true`
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
  }
)

const ProductModel = model<IProduct>('product', productSchema)

export default ProductModel
