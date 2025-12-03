import axios from "axios";

const API = "https://safenetbackend-rbb5.onrender.com/auth";

export const signupUser = (data) => axios.post(`${API}/signup`, data);
export const loginUser = (data) => axios.post(`${API}/login`, data);
