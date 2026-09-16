import Activity from "../models/Activity.js";

const activityLog = async (actorId, type, message) => {
    try {
        await Activity.create({ actor: actorId, type, message })
    }catch(err){
        console.error("Log error", err);
    }
}


export default activityLog