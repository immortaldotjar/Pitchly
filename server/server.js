import express from "express"
import cors from "cors"
import helmet from "helmet"
import dotenv from "dotenv"
import db from "./config/db.js"
import authRoute from "./routes/authRoute.js"
import { notFound, errHandlerMiddleware } from "./middleware/errHandlerMiddleware.js"
import startupRoute from "./routes/startupRoute.js"
import meetingRoute from "./routes/meetingRoute.js"
import activityRoute from "./routes/activityRoute.js"
dotenv.config()
db()

const app = express()

app.use(cors({
    origin: [process.env.CLIENT_URL],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}))
app.use(helmet())

app.use(express.json())

app.use("/api/auth", authRoute)
app.use("/api/startups", startupRoute)
app.use("/api/meetings", meetingRoute)
app.use("/api/activity", activityRoute)

app.use(notFound)
app.use(errHandlerMiddleware)


app.listen(3000, () => {
    console.log(`Server is running on http://localhost:3000`);
})