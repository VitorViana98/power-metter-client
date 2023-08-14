import React, { createContext, useState, useContext } from "react";
import {
  loginRoute,
  registerRoute,
  logout as logoutService,
} from "../services/api";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = async (userData) => {
    try {
      const connectedUser = await loginRoute(userData);
      console.log("aqui logou", connectedUser);
      setUser(connectedUser);
      setAuthenticated(true);
    } catch (error) {
      console.log("aqui login error", error);
    }
  };

  const register = async (userData) => {
    try {
      const registeredUser = await registerRoute(userData);
      setUser(registeredUser);
      setAuthenticated(true);
      console.log("aqui logou", registeredUser);
    } catch (error) {
      console.log("aqui register error", error);
    }
  };

  const logout = () => {
    setUser(null);
    setAuthenticated(false);
    logoutService();
  };

  return (
    <AuthContext.Provider
      value={{ authenticated, user, login, register, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
