import axios from "axios";

const API = axios.create({
  baseURL: "https://myblogs-r30i.onrender.com/api"
});

export default API;