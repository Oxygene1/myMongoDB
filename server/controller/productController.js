const Product = require("../model/productSchema");

const postProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (err) {
    console.log(err.message);
  }
  res.send(req.body);
};

const getAllProduct = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    console.log(error.message);
    res.status(500).json(error.message);
  }
};

const getProductById = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findById(id); // Use findById instead of find
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
};

const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      return res.status(404).json({ message: `cannot find any product ${id}` });
    }
    const updatedProduct = await Product.findById(id);
    res.status(200).json(updatedProduct);
  } catch (error) {}
};
const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const deletedProduct = await Product.findByIdAndDelete(id); // Provide the id parameter here
    if (!deletedProduct) {
      return res
        .status(404)
        .json({ message: `Cannot find product with ID ${id}` });
    }
    res.status(200).json(deletedProduct);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error" });
  }
};
module.exports = {
  postProduct,
  getAllProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};
