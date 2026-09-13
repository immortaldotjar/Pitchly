import User from "../models/Users.js";
import token from "../utils/token.js";

const signup = async (req, res, next) => {
    try {
        const { username, password, email, role } = req.body
        if (!username || !password || !email || !role) {
            res.status(400)
            throw new Error("Field is Empty")
        }

        const isUserExists = await User.findOne({ email })
        if (isUserExists) {
            res.status(409)
            throw new Error("User already exists connected with this email!")
        }

        const user = await User.create({ username, email, password, role })
        const genToken = token(user._id)

        res.status(201).json({
            token : genToken,
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                role: user.role
            }
        })
    } catch (err) {
        next(err)
    }
}


const signin = async (req, res, next) => {
    try {
        const { email, password } = req.body

        if (!email || !password) {
            res.status(400)
            throw new Error("Email and Password Required!")


        }

        const user = await User.findOne({ email }).select("+password")

        if (!user) {
            res.status(401)
            throw new Error("Invalid Email or password!")
        }

        const isPassMatching = await user.comparePassword(password)

        if (!isPassMatching) {
            res.status(401)
            throw new Error("Invalid Email or password!")
        }

        const genToken = token(user._id)

        res.json({
            token : genToken,
            user: {
                id: user._id,
                username: user.username,
                email: user.email,
                role: user.role
            }
        })
    } catch (err) {
        next(err)
    }
}

export { signup, signin }