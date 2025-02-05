import React, { createContext, useState, useContext } from "react";

import {
  createCircuitService,
  listCircuitService,
  listDashboardService,
} from "../services/api";

export const PowerViewContext = createContext();

export function PowerViewProvider({ children }) {
  const [circuits, setCircuits] = useState([]);
  const [dashboardData, setDashboardData] = useState([]);
  const [dashboardInfo, setDashboardInfo] = useState({
    circuit_name: "",
    circuit_description: "",
  });

  const createCircuit = async (circuitData) => {
    try {
      const createdCircuit = await createCircuitService(circuitData);
      setCircuits((o) => [...o, createdCircuit.content]);
      return createdCircuit.content;
    } catch (error) {
      console.error("Create circuit error", error);
    }
  };

  const listCircuits = async (circuitFilter) => {
    try {
      const listedCircuits = await listCircuitService(circuitFilter);
      setCircuits(listedCircuits.content);
      return listedCircuits.content;
    } catch (error) {
      console.error("List circuits error", error);
    }
  };

  const listDashboard = async (circuitFilter) => {
    try {
      const listedDashboard = await listDashboardService(circuitFilter);

      if (listedDashboard?.content?.message === "Circuit results not found") {
        setDashboardData("No data");
        setDashboardInfo({
          circuit_name: "",
          circuit_description: "",
        });
      } else {
        setDashboardData(listedDashboard.content.results);
        setDashboardInfo({
          circuit_name: listedDashboard.content.circuit_name,
          circuit_description: listedDashboard.content.circuit_description,
        });
      }
      return listedDashboard.content;
    } catch (error) {
      console.error("List circuit dashboard error", error);
    }
  };

  const contextValue = React.useMemo(() => ({
    circuits,
    setCircuits,
    createCircuit,
    listCircuits,
    listDashboard,
    dashboardData,
    setDashboardData,
    dashboardInfo,
    setDashboardInfo,
  }), [circuits, dashboardData, dashboardInfo]);

  return (
    <PowerViewContext.Provider value={contextValue}>
      {children}
    </PowerViewContext.Provider>
  );
}

export function usePowerViewUser() {
  return useContext(PowerViewContext);
}
