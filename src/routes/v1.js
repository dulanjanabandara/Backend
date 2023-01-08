const express = require('express');
const productsRouter = require('./products.route');

const v1 = express.Router();

v1.get('/', (req, res) => {
  res.send('<h2>Hi there!!!👋</h2>');
  console.log('yeah it ran');
});

v1.use('/products', productsRouter);

module.exports = v1;
