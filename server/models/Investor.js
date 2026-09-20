import mongoose from "mongoose"

const investorSchema =  new mongoose.Schema({
    owner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required : true ,
    },
    investorName : {
        type : String,
        required : true, 
        trim : true ,

    },
    industries : [String],
    stage : String,
    investmentRange : String,
    status : {
        type : String,
        enum : ["pending","verified" ,"suspended"],
        default : "pending",
    },
})

const Investor = mongoose.model("Investor",investorSchema)

export default Investor