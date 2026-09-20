import Investor from "../models/Investor.js";
import logActivity from "../utils/activityLog.js"


const createInvestor = async (req, res, next) => {
    try {
        const { investorName, industries, stage, investmentRange } = req.body

        const isExist = await Investor.findOne({ owner: req.user._id })

        if (isExist) {
            res.status(409)
            throw new Error("Already have an Investor Profile!")
        }

        const investor = await Investor.create({
            owner: req.user._id,
            investorName,
            industries,
            stage,
            investmentRange
        })

        await logActivity(req.user._id, "investor joined", `${req.user.username}`)

        res.status(201).json({ investor })
    } catch (err) {
        next(err)
    }
}


const getInvestorProfile = async (req, res, next) => {
    try {
        const investor = await Investor.findOne({ owner: req.user._id })

        if (!investor) {
            res.status(404)
            throw new Error("Investor Not Found!")
        }

        res.json({ investor })
    } catch (err) {
        next(err)
    }
}

const getAllInvestors = async (req, res, next) => {
    try {
        const { status, limit } = req.query
        const filter = status ? { status } : {}

        const query = Investor.find(filter).populate("owner", "username email").sort({ createdAt: -1 })

        if (limit) {
            query.limit(Number(limit))
        }

        const investors = await query

        res.json({ investor })
    } catch (err) {
        next(err)
    }


}


const updateInvestorStatus = async (req, res, next) => {
    try {
        const { status } = req.body
        const allowedStatus = ["pending", "verified", "suspended"]

        if (!allowedStatus.includes(status)) {
            res.status(404)
            throw new Error("Invalid Status!")

        }

        const investor = await Investor.findById(req.params.id)

        if (!investor) {
            res.status(404)
            throw new Error("Investor Not Found!")

        }

        investor.status = status
        await investor.save()

        await logActivity(req.user._id, `investor_${status}`, `${investor.investorName} was marked as ${status} by an admin.`)
    } catch (err) {
        next(err)
    }


}


export { createInvestor, getAllInvestors, getInvestorProfile, updateInvestorStatus }