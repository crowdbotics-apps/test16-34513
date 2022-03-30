import axios from "axios"
const tESTCONNECTOR = axios.create({
  baseURL: "https://listen.samcloud.com/v2/133084?page=page-overview",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
