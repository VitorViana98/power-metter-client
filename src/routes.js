import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import { AuthProvider } from "./contexts/authContext";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";

function AppRoutes() {
  return (
    <AuthProvider>
      <Router>
        <>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </>
      </Router>
    </AuthProvider>
  );
}

export default AppRoutes;
