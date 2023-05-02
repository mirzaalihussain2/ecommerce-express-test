const express = require("express");

const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  deleteAll
} = require("../controllers/product.controller");

const router = express.Router();

/* Creating the routes for the product controller. */
router.get("/products", getProducts);
router.get("/products/:id", getProduct);
router.post("/products", createProduct);
router.patch("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);
router.delete("/products", deleteAll);

module.exports = router;
