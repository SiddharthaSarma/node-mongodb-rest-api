const express = require('express');
const router = express.Router();
const {
  getProducts,
  addProducts,
  deleteProduct,
  patchProduct
} = require('../controllers/products');

router
  .get('/', getProducts)
  .post('/', addProducts)
  .delete('/:productId', deleteProduct)
  .patch('/:productId', patchProduct);

module.exports = router;
