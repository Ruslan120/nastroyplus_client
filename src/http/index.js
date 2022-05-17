import axios from "axios";
import { BASE_URL } from "../utils/consts";

const api = axios.create({
  withCredentials: true,
  baseURL: BASE_URL + "/api",
});

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
});

export default api;
