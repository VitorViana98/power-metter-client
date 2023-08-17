import React, { createContext, useState, useContext } from "react";

import { createCircuitService, listCircuitService } from "../services/api";

export const PowerViewContext = createContext();

export function PowerViewProvider({ children }) {
  const [circuits, setCircuits] = useState([]);

  const createCircuit = async (circuitData) => {
    try {
      const createdCircuit = await createCircuitService(circuitData);
      setCircuits((o) => [...o, createdCircuit.content]);
      return createdCircuit.content;
    } catch (error) {
      console.log("aqui create circuit error", error);
    }
  };

  const listCircuits = async (circuitFilter) => {
    try {
      const listedCircuits = await listCircuitService(circuitFilter);
      setCircuits(listedCircuits.content);
      return listedCircuits.content;
    } catch (error) {
      console.log("aqui list circuits error", error);
    }
  };

  return (
    <PowerViewContext.Provider
      value={{ circuits, setCircuits, createCircuit, listCircuits }}
    >
      {children}
    </PowerViewContext.Provider>
  );
}

export function usePowerViewUser() {
  return useContext(PowerViewContext);
}
