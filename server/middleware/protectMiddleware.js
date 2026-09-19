import jwt from "jsonwebtoken"
import User from "../models/Users.js"

const protectMiddleware = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            res.status(401)
            throw new Error("Not authorized!")
        }

        const tokenValue = authHeader.split(" ")[1]
        const decodedToken = jwt.verify(tokenValue, process.env.JWT_SECRET)

        req.user = await User.findById(decodedToken.id)

        if (!req.user) {
            res.status(401)
            throw new Error("User Not Found!")
        }

        next()

    } catch (err) {
        res.status(401)
        next(err)
    }
}


export default protectMiddleware