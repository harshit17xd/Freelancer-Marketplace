import axios from "axios";

const Axios = axios.create({
  baseURL: import.meta.env.BASE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default Axios;
