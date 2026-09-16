import express from "express"

import protectMiddleware from "../middleware/protectMiddleware.js"

import { getRecentActivity } from "../controllers/activityController.js"

const activityRoute = express.Router()

activityRoute.get("/recent", protectMiddleware, getRecentActivity)

export default activityRoute

