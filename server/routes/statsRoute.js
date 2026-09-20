import express from "express"
import protectMiddleware from "../middleware/protectMiddleware.js"
import { getAdminStats } from "../controllers/statsController.js"

const statsRoute = express.Router()

statsRoute.get("/admin",protectMiddleware,getAdminStats)

export default statsRoute