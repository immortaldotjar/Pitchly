import express from "express"

import protectMiddleware from "../middleware/protectMiddleware.js"

import { getMyMeetings, createMeeting } from "../controllers/meetingController.js"

const meetingRoute = express.Router()

meetingRoute.get("/me", protectMiddleware, getMyMeetings)
meetingRoute.get("/", protectMiddleware, createMeeting)

export default meetingRoute
