import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:900",
  // timeout: 1000,
  // headers: {
  //   "Content-Type": "application/json",
  // },
});
