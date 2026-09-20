import User from "../models/Users.js"
import Startup from "../models/Startup.js"

const getAdminStats = async (req, res, next) => {
    try {
        const totalUsers = await User.countDocuments()
        const activeStartups = await Startup.countDocuments({ status: "active" })
        const pendingApprovals = await Startup.countDocuments({ status: "pending" })
        const suspendedStartups = await Startup.countDocuments({ status: "suspended" })


        res.json({
            totalUsers,
            activeStartups,
            pendingApprovals,
            suspendedStartups
        })
    } catch (err) {
        next(err)
    }

}

export { getAdminStats }