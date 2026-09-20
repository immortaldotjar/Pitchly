import express from 'express'
import rateLimit from 'express-rate-limit'
import { signup, signin, getAllUsers } from '../controllers/authController.js'
import protectMiddleware from '../middleware/protectMiddleware.js'

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
authRoute.get("/users", protectMiddleware, getAllUsers)


export default authRoute