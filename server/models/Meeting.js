import { truncates } from "bcryptjs";
import mongoose from "mongoose";


const meetingSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true
        },
        withWhom: String,
        location: String,
        date: {
            type: Date,
            required: true,
        },
    }
)

const Meeting = mongoose.model("Meeting", meetingSchema)


export default Meeting