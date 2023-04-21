import axios from "axios";
import { baseUrl } from "../config/environment";

const axiosInstance = axios.create({
  baseURL: baseUrl
});

export default axiosInstance;