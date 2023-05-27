import express from "express";
const router = express.Router();
import { getProducts, getCustomers } from "../controlles/client.js";

router.get("/products", getProducts);
router.get("/customers", getCustomers);

export default router;
