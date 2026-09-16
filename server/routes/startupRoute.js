import express from "express"
import protectMiddleware from "../middleware/protectMiddleware.js"

import { createStartup,getMyStartup,getAllStartups,updateStartupStatus } from "../controllers/startupController.js"


const startupRoute = express.Router()

startupRoute.post("/", protectMiddleware, createStartup)
startupRoute.get("/me", protectMiddleware, getMyStartup)
startupRoute.get("/", protectMiddleware, getAllStartups)
startupRoute.patch("/:id/status", protectMiddleware, updateStartupStatus)

export default startupRoute