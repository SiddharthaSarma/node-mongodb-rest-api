const Product = require('../models/product');

const getProducts = async (req, res) => {
  const result = await Product.find({});
  return res.json(result);
};

const addProducts = async (req, res) => {
  const result = await Product.create(req.body);
  return res.json(result);
};

const deleteProduct = async (req, res) => {
  const { productId } = req.params;
  const result = await Product.findByIdAndDelete(productId);
  return res.json(result);
};

const patchProduct = async (req, res) => {
  const { productId } = req.params;
  const result = await Product.findByIdAndUpdate(productId, req.body);
  return res.json(result);
};

module.exports = {
  getProducts,
  addProducts,
  deleteProduct,
  patchProduct
};
