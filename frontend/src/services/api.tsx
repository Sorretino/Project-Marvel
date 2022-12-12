import axios from "axios";
import { server_url } from "../utils/config";

const API = axios.create({
  baseURL: server_url,
   headers: {
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
  }, 
});


export default API;
