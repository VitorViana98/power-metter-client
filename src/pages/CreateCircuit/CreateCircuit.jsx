import React, { useContext, useState } from "react";

import { PowerViewContext } from "../../contexts/powerViewUserContext";
import NavigateLeftColumn from "../../components/NavigateLeftColumn/NavigateLeftColumn";

import * as yup from "yup";

import "./CreateCircuit.css";

function CreateCircuit() {
  const { createCircuit } = useContext(PowerViewContext);
  const [circuitName, setCircuitName] = useState("");
  const [circuitDescription, setCircuitDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const validationCreateCircuit = yup.object().shape({
    circuitName: yup.string().min(1).required(),
  });

  const handleCreateCircuit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      await validationCreateCircuit.validate({ circuitName });
      const response = await createCircuit({
        circuitName,
        circuitDescription,
      });
      setIsLoading(false);

      return response;
    } catch (error) {
      console.error("Erro:", { error });
      alert(error);
    }
  };

  return (
    <div className="create-circuit-container">
      <NavigateLeftColumn />
      <div className="rigth-content">
        <div className="create-circuit-form">
          <h2>Criar Circuito</h2>
          <form onSubmit={handleCreateCircuit}>
            <input
              type="text"
              placeholder="Nome"
              value={circuitName}
              onChange={(e) => setCircuitName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Descrição"
              value={circuitDescription}
              onChange={(e) => setCircuitDescription(e.target.value)}
            />
            <button variant="contained" type="submit" disabled={isLoading}>
              Criar Circuito
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateCircuit;
