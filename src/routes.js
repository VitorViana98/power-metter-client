import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import { AuthProvider } from "./contexts/authContext";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import User from "./services/User";
import { LOGIN_ROUTE } from "./consts";

function AppRoutes() {
  console.log("aqui antes");
  if (User.isAuthenticated()) {
    console.log("aqui antenticou");
    return (
      <AuthProvider>
        <Router>
          <>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </>
        </Router>
      </AuthProvider>
    );
  } else {
    return (
      <Navigate
        to={{
          pathname: LOGIN_ROUTE,
          state: { from: window.location },
        }}
      />
    );
  }
}

export default AppRoutes;
