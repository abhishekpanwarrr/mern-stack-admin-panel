import express from "express"
const router = express.Router()
import {getSales} from "../controlles/sales.js"

router.get("/sales",getSales)

export default router