import {model, Schema } from "mongoose";

const productSchema = new Schema({
    name: {
        type: String,
        required: true, // Name is mandatory
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
        required: true, // Category is mandatory
        trim: true, // Removes extra spaces
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
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
});

const Product = model("Product", productSchema);

export default Product;