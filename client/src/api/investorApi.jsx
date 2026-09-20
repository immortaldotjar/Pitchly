import axiosInstance from "./axiosInstance"


const getAllInvestorReq = async (params) => {
    const res = await axiosInstance.get("/investors", { params })
    return res.data
}

const updateInvestorStatusReq = async (id, status) => {
    const res = await axiosInstance.patch(`/investors/${id}/status`, { params })
    return res.data
}

export { getAllInvestorReq, updateInvestorStatusReq }