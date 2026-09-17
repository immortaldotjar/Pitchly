import axiosInstance from "./axiosInstance"

const getRecentActivityReq = async () => {
    const res = await axiosInstance.get("/activity/recent")
    return res.data
}

export { getRecentActivityReq }