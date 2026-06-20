import axios from "axios";

const auth = btoa(
  `${import.meta.env.VITE_API_USERNAME}:${import.meta.env.VITE_API_PASSWORD}`
);

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    Authorization: `Basic ${auth}`,
  },
});

export const getPatients = async () => {
  const response = await api.get("/");
  return response.data;
};

export default api;