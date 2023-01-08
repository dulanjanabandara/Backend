const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    sku: {
      type: String,
      required: [true, 'A product must have an SKU number'],
      unique: true,
      maxlength: [8, 'An SKU number should not be more than 8 characters'],
      minlength: [5, 'An SKU number should not be less than 5 characters'],
    },
    productName: {
      type: String,
      required: [true, 'A product must have a product name!'],
      unique: true,
      trim: true,
      minlength: [5, 'A tour name must have more or equal than 5 characters!'],
    },
    quantity: {
      type: Number,
      default: 1,
    },
    productImageThumbnail: {
      type: String,
    },
    productImages: {
      type: [String],
    },
    price: {
      type: Number,
      required: [true, 'A product must have a price'],
    },
    description: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);
module.exports = Product;
