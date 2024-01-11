import React from "react";
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./components/Header/Header";

import Circuits from "./pages/Circuits/Circuits";

import {
  CIRCUIT_ROUTE,
  CIRCUIT_DASHBOARD_ROUTE,
} from "./consts";
import CircuitDashboard from "./pages/CircuitDashboard/CircuitDashboard";


export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
          <Route exact path="/" element={<Circuits />} />
          <Route exact path={CIRCUIT_ROUTE} element={<Circuits />} />
          <Route exact path={CIRCUIT_DASHBOARD_ROUTE} element={<CircuitDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
