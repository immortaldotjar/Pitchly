import mongoose from "mongoose";

const startupSchema = new mongoose.Schema(
    {
        owner : {
            type : mongoose.Schema.Types.ObjectId,
            ref : "User",
            required : true
        },
        startipName : {
            type : String,
            required : true,
            trim : true,
        },
        industry : String,

        stage : String,
        teamSize : String,
        status :{
            type : String,
            enum : ["pending","active" ,"suspended" ,"rejected"],
            default : "pending",
        }
    }
)

const Startup = mongoose.model("Startup",startupSchema)


export default Startup