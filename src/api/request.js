import { axiosInstance } from "./utils";

export const getAlllist = (num=1) => {
    return axiosInstance.get (`/v1/topics?page=${num}`);
}

export const getGoodlist = (num=1)=>{
    return axiosInstance.get(`/v1/topics?tab=good&page=${num}`)
}

export const getSharelist = (num=1)=>{
    return axiosInstance.get(`/v1/topics?tab=share&page=${num}`)
}

export const getToken = (accesstoken)=>{
    return axiosInstance.post(`/v1/accesstoken`,{accesstoken})
}
