import axios from "axios";

const API = "http://localhost:3001/auth";

export const signupUser = (data) => axios.post(`${API}/signup`, data);
export const loginUser  = (data) => axios.post(`${API}/login`, data);
