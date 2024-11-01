import axios from "axios";

const request = axios.create({
  baseURL: "/api",
});

request.interceptors.response.use((res) => {
  return res.data.data;
});

export default request;
