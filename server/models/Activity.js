import mongoose, { mongo } from "mongoose";

const activitySchema = new mongoose.Schema({
    actor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    type: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        requires: true,
    }
})

const Activity = mongoose.model("Activity", activitySchema)

export default Activity