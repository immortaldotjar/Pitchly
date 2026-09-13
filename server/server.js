import express from "express"
import cors from "cors"
import helmet from "helmet"
import dotenv from "dotenv"
import db from "./config/db.js"
import authRoute from "./routes/authRoute.js"
import {notFound ,errHandler} from "./middleware/errHandler.js"

dotenv.config()
db()

const app = express()

app.use(cors({
    origin: [process.env.CLIENT_URL],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}))
app.use(helmet())

app.use(express.json())

app.use("/api/auth" ,authRoute)

app.use(notFound)
app.use(errHandler)





app.listen(3000,()=> {
    console.log(`Server is running on http://localhost:3000`);
})