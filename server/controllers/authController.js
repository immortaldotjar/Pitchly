import User from "../models/Users.js";
import token from "../utils/token.js";
import Startup from "../models/Startup.js";
import activityLog from "../utils/activityLog.js";
import Investor from "../models/Investor.js";


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

        if (role === "startup") {
            const { startupName, industry, stage, teamSize } = req.body
            await Startup.create({ owner: user._id, startupName, stage, teamSize })
            await activityLog(user._id, "user joined", `${user.username} joined Pitchly as a ${role}.`)
        }

        if (role === "investor") {
            const { investorName, industries, stage, investmentRange } = req.body
            await Investor.create({ owner: user._id, investorName, stage, investmentRange })
            await activityLog(user._id, "user joined", `${user.username} joined Pitchly as a ${role}.`)
        }



        const genToken = token(user._id)

        res.status(201).json({
            token: genToken,
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
            token: genToken,
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


const getAllUsers = async (req, res, next) => {
    try {
        const users = (await User.find()).sort({ createdAt: -1 })

        const usersWithProfiles = await Promise.all(
            users.map(async (user) => {
                let profile = null
                if (user.role === "startup") {
                    profile = await Startup.findOne({ owner: user._id })
                }
                if (user.role === "investor") {
                    profile = await Startup.findOne({ owner: user._id })
                }

                return {
                    id: user._id,
                    username: user.username,
                    email: user.email,
                    role: user.role,
                    startupName: profile?.startupName ?? null,
                    investorName: profile?.investorName ?? null,
                    status: profile?.status ?? "active",
                    joined: user.createdAt,
                }
            })
        )

        res.json({ users: usersWithProfiles })

    } catch (err) {
        next(err)
    }
}

const updateUserRole = async (req, res, next) => {
    try {
        const { role } = req.body
        const allowedRoles = ["startup", "investor", "admin"]

        if (!allowedRoles.includes(role)) {
            res.status(400)
            throw new Error("Invalid role!")
        }

        if (req.params.id === req.user._id.toString()) {
            res.status(400)
            throw new Error("You can't change the role!")


        }

        const user = await User.findById(req.params.id)
        if (!user) {
            res.status(404)
            throw new Error("User not Found")
        }

        user.role = role
        await user.save()
        res.json({ message: `${user.username} is now ${role}` })



    } catch (err) {
        next(err)
    }
}

export { signup, signin, getAllUsers, updateUserRole }