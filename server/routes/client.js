import express from "express";
const router = express.Router();
import { getProducts } from "../controlles/client.js";
router.get("/products", getProducts);
export default router;
