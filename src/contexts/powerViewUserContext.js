import React, { createContext, useState, useContext } from "react";

import { createCircuitService } from "../services/api";

export const PowerViewContext = createContext();

export function PowerViewProvider({ children }) {
  const [circuits, setCircuits] = useState([]);

  const createCircuit = async (circuitData) => {
    try {
      const createdCircuit = await createCircuitService(circuitData);

      setCircuits((o) => [...o, createdCircuit]);
      return createdCircuit;
    } catch (error) {
      console.log("aqui create circuit error", error);
    }
  };

  return (
    <PowerViewContext.Provider value={{ circuits, setCircuits, createCircuit }}>
      {children}
    </PowerViewContext.Provider>
  );
}

export function usePowerViewUser() {
  return useContext(PowerViewContext);
}
