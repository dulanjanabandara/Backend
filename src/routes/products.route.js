const express = require('express');

const {
  getAllProducts,
  getOneProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/products.controller');
const { uploadProductImages } = require('../middlewares/uploadProductImages');
const { resizeProductImages } = require('../middlewares/resizeProductImages');

const productRouter = express.Router();

productRouter.route('/').get(getAllProducts).post(createProduct);
productRouter
  .route('/:id')
  .get(getOneProduct)
  .put(uploadProductImages, resizeProductImages, updateProduct)
  .delete(deleteProduct);

module.exports = productRouter;
