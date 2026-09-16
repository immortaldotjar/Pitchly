import Startup from "../models/Startup.js"
import activityLog from "../utils/activityLog.js"

const createStartup = async (req, res, next) => {
    try {
        const { startupName, industry, stage, teamSize } = req.body

        const existing = await Startup.findOne({ owner: req.user._id })
        if (existing) {
            res.status(409)
            throw new Error("You already have a Startup profile!")
        }

        const startup = await Startup.create({
            owner: req.user._id,
            startupName,
            industry,
            stage,
            teamSize,
        })

        await activityLog(req.user._id, "startup_submitted", `${req.user.username} submitted a new startup: ${startup.startupName}`)

        res.status(201).json({ startup })
    } catch (err) {
        next(err)
    }
}

const getMyStartup = async (req, res, next) => {
    try {
        const startup = await Startup.findOne({ owner: req.user._id })

        if (!startup) {
            res.status(404)
            throw new Error("No startup profile found.")
        }

        res.json({ startup })
    } catch (err) {
        next(err)
    }
}

const getAllStartups = async (req, res, next) => {
    try {
        const { status, limit } = req.query
        const filter = status ? { status } : {}

        const query = Startup.find(filter).populate("owner", "username email").sort({ createdAt: -1 })
        if (limit) query.limit(Number(limit))

        const startups = await query
        res.json({ startups })
    } catch (err) {
        next(err)
    }
}

const updateStartupStatus = async (req, res, next) => {
    try {
        const { status } = req.body
        const allowedStatuses = ["pending", "active", "suspended", "rejected"]

        if (!allowedStatuses.includes(status)) {
            res.status(400)
            throw new Error("Invalid status value.")
        }

        const startup = await Startup.findById(req.params.id)
        if (!startup) {
            res.status(404)
            throw new Error("Startup not found.")
        }

        startup.status = status
        await startup.save()

        await activityLog(req.user._id, `startup_${status}`, `${startup.startupName} was marked as ${status} by an admin.`)

        res.json({ startup })
    } catch (err) {
        next(err)
    }
}

export { createStartup, getMyStartup, getAllStartups, updateStartupStatus }