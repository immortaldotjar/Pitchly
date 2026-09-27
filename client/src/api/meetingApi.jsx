import axiosInstance from "./axiosInstance";

const getMyMeetingsReq = async () => {
    const res = await axiosInstance.get("/meetings/me")

    return res.data
}


const createMeetingReq = async (data) => {
    const res = await axiosInstance.post("/meetings", data)
    return res.data
}

export { getMyMeetingsReq , createMeetingReq}