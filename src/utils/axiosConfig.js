import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://omega-movie-app.onrender.com",
});

export default axiosInstance;
