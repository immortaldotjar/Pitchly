import Activity from "../models/Activity.js";

const getRecentActivity = async (req, res, next) => {
    try {
        const activities = await Activity.find()
            .populate("actor", "username role").sort({ createdAt: -1 }).limit(10)

        res.json({ activities })
    } catch (err) {
        next(err)
    }

}

export { getRecentActivity }

