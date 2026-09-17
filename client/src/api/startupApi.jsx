import axiosInstance from "./axiosInstance"

const createStartupReq = async (data) => {
    const res = await axiosInstance.post("/startups", data)

    return res.data
}
const getMyStartupReq = async () => {
    const res = await axiosInstance.get("/startups/me")

    return res.data
}
const getAllStartupReq = async (params) => {
    const res = await axiosInstance.get("/startups", { params })

    return res.data
}
const updateStartupStatusReq = async (id, status) => {
    const res = await axiosInstance.patch(`/startups/${id}/status`, { status })

    return res.data
}

export { createStartupReq, getAllStartupReq, getMyStartupReq, updateStartupStatusReq }