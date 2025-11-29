import api from "./api";

// GET
export const getDemoMessage = async () => await api.get("users/demo/");
export const getProfile = async () => await api.get("users/profile/");



// POST
export const registerUser = async (userData) => await api.post("users/register/", userData);
export const loginUser = async (userData) => await api.post("users/login/", userData);