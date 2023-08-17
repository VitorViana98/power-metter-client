import React from "react";
import {
  BrowserRouter,
  Navigate,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./components/Header/Header";

import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import CreateCircuit from "./pages/CreateCircuit/CreateCircuit";

import User from "./services/User";
import { CREATE_CIRCUIT_ROUTE, HOME_ROUTE, LOGIN_ROUTE } from "./consts";

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
          <Route exact path={HOME_ROUTE} element={<Home />} />
          <Route
            exact
            path={CREATE_CIRCUIT_ROUTE}
            element={<CreateCircuit />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
