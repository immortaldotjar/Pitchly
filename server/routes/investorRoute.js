import express from "express"
import protectMiddleware from "../middleware/protectMiddleware.js"
import { createInvestor, getAllInvestors, getInvestorProfile, updateInvestorStatus } from "../controllers/investorController.js"

const investorRoute = express.Router()


investorRoute.post("/",protectMiddleware,createInvestor)
investorRoute.get("/me",protectMiddleware,getInvestorProfile)
investorRoute.get("/",protectMiddleware,getAllInvestors)
investorRoute.post("/:id/status",protectMiddleware,updateInvestorStatus)


export default investorRoute