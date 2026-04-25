import axios from "axios";

const API = axios.create({
  // baseURL: "http://localhost:5000"
  baseURL: "https://myblogs-r30i.onrender.com"
});

export default API;