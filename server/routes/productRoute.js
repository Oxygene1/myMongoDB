/**
 * @author ibrahim
 * @params controllers
 */

const express = require("express");
const router = express.Router();
const {
  postProduct,
  getAllProduct,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controller/productController");
router.post("", postProduct);
router.get("/", getAllProduct);
router.get("/:id", getProductById);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
module.exports = router;
