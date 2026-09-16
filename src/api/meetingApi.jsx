import axiosInstance from "./axiosInstance";

const getMyMeetingsReq = async () => {
    const res = await axiosInstance.get("/meetings/me")

    return res.data
}

export { getMyMeetingsReq }