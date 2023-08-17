import React from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  // Router,
  Routes,
} from "react-router-dom";
import Header from "./components/Header/Header";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import User from "./services/User";
import { LOGIN_ROUTE } from "./consts";

const PrivateRoute = () => {
  if (User().isAuthenticated()) {
    return <Outlet />;
  } else {
    return <Navigate to={LOGIN_ROUTE} />;
  }
};

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path={LOGIN_ROUTE} element={<Login />} />
        <Route exact path="/" element={<PrivateRoute />}>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
