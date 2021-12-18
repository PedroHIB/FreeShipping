import axios from "axios";

const api = axios.create({
  baseURL: "https://open.er-api.com/v6/latest/USD",
});

export default api;
