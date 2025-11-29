import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/", // base URL for Django API
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error("API Error:", error.response || error.message);
    return Promise.reject(error);
  }
);

// Helper function in case we need to get the full response
export const apiFull = axios.create({
  baseURL: "http://127.0.0.1:8000/api/", // base URL for Django API
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
