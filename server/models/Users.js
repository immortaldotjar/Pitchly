import mongoose from "mongoose"
import bcrypt from "bcryptjs"
const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },
        password: {
            type: String,
            required: true,
            select: false
        },

        role: {
            type: String,
            required: true,
            enum: ["startup", "investor", "admin"],
        }
    }

)

userSchema.pre("save", async function () {
    if (!this.isModified("password")) return
    this.password = await bcrypt.hash(this.password, 12)
})

userSchema.methods.comparePassword = function (candidate) {
    return bcrypt.compare(candidate, this.password)
}

const User = mongoose.model("User", userSchema)

export default User