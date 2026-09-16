import Meeting from "../models/Meeting.js"

const getMyMeetings = async (req, res, next) => {
    try {
        const meetings = await Meeting.find({ createdBy: req.user._id })
            .sort({ date: 1 })
            .limit(5)

        res.json({ meetings })
    } catch (err) {
        next(err)
    }
}

const createMeeting = async (req, res, next) => {
    try {
        const { title, withWhom, date, location } = req.body

        const meeting = await Meeting.create({
            title,
            withWhom,
            date,
            location,
            createdBy: req.user._id,
        })

        res.status(201).json({ meeting })
    } catch (err) {
        next(err)
    }
}

export { getMyMeetings, createMeeting }