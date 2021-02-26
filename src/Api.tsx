import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://gjbackend.vercel.app/api",
  timeout: 5000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});
