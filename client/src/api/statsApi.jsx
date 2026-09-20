import axiosInstance from "./axiosInstance"

const getAdminStatusReq = async () => {
    const res = await axiosInstance.get("/stats/admin")

    return res.data
}

export { getAdminStatusReq }