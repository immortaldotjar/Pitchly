import express from 'express'
import rateLimit from 'express-rate-limit'
import { signup, signin, getAllUsers, updateUserRole } from '../controllers/authController.js'
import protectMiddleware from '../middleware/protectMiddleware.js'
import adminHandlerMiddleware from '../middleware/adminHandlerMiddleware.js'
const authRoute = express.Router()

const authLimit = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 20,
    message: {
        message: "Too many attempt , try again later!"
    }

})


authRoute.post("/signup", authLimit, signup)
authRoute.post("/signin", authLimit, signin)
authRoute.get("/users", protectMiddleware,adminHandlerMiddleware, getAllUsers)
authRoute.patch("/users/:id/role", protectMiddleware, adminHandlerMiddleware, getAllUsers, updateUserRole)


export default authRoute