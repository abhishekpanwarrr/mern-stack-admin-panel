import express from "express"
import { getAdmins } from "../controlles/management.js"
const router = express.Router()
 
router.get("/admins",getAdmins)

export default router