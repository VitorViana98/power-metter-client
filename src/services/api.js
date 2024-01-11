import axios from "axios";

const ip_address = "192.168.10.12";

const api = axios.create({
  baseURL: `http://${ip_address}:3000/power-metter`, // Substitua pela URL da sua API
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const createCircuitService = async (data) => {
  try {
    const response = await api.post("/user/circuit", {
      ...data,
    });
    return response.data;
  } catch (error) {
    console.error("Erro no registro:", error);
    return false;
  }
};

export const listCircuitService = async (data) => {
  try {
    const response = await api.get("/user/circuit", {});
    return response.data;
  } catch (error) {
    console.error("Erro na listagem:", error);
    return false;
  }
};

export const listDashboardService = async (circuit_id) => {
  try {
    const response = await api.get(`/user/circuit/${circuit_id}/dashboard`, {});
    return response.data;
  } catch (error) {
    console.error("Erro na listagem:", error);
    return false;
  }
};

export const logout = () => {
  localStorage.removeItem("token");
};

export default api;
