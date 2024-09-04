import express from "express";
import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

// GET all products
router.get("/", getProducts);

// Create product end-point
router.post("/", createProduct);

// Update product end-point
router.patch("/:id", updateProduct);

// Delete product end point
router.delete("/:id", deleteProduct);

export default router;
