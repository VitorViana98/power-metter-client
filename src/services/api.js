import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3030/power-metter", // Substitua pela URL da sua API
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

export const loginRoute = async (data) => {
  try {
    const response = await api.post("/user/login", data);
    if (response.data.success) {
      localStorage.setItem("token", response.data.token);
      return true;
    } else if (response.data.message === "Credenciais inválidas") {
      return { success: false, message: "Credenciais inválidas", token: [] };
    }
    return false;
  } catch (error) {
    console.error("Erro no login:", error);
    return false;
  }
};

export const registerRoute = async (data) => {
  try {
    const response = await api.post("/user/register", data);
    if (response.data.success) {
      localStorage.setItem("token", response.data.token);
      return true;
    }
    return false;
  } catch (error) {
    console.error("Erro no registro:", error);
    return false;
  }
};

export const logout = () => {
  localStorage.removeItem("token");
};

export default api;
