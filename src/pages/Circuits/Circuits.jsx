import React, { useContext, useEffect, useState } from "react";

import { PowerViewContext } from "../../contexts/powerViewUserContext";
import NavigateLeftColumn from "../../components/NavigateLeftColumn/NavigateLeftColumn";

import { Modal } from "@mui/material";

import * as yup from "yup";

import "./Circuits.css";

function Circuits() {
  const { createCircuit, listCircuits, circuits } =
    useContext(PowerViewContext);
  const [circuitName, setCircuitName] = useState("");
  const [circuitDescription, setCircuitDescription] = useState("");
  const [isLoadingCreatingCircuit, setIsLoadingCreatingCircuit] =
    useState(false);
  const [openCreateCircuitModal, setOpenCreateCircuitModal] = useState(false);

  const validationCreateCircuit = yup.object().shape({
    circuitName: yup.string().min(1).required(),
  });

  const handleCreateCircuit = async (e) => {
    e.preventDefault();

    try {
      setIsLoadingCreatingCircuit(true);

      await validationCreateCircuit.validate({ circuitName });
      const response = await createCircuit({
        circuitName,
        circuitDescription,
      });
      setIsLoadingCreatingCircuit(false);
      setOpenCreateCircuitModal(false);

      return response;
    } catch (error) {
      console.error("Erro:", { error });
      alert(error);
    }
  };

  const CreateCircuitModal = () => {
    if (!openCreateCircuitModal) return;

    return (
      <Modal
        open={openCreateCircuitModal}
        onClose={() => setOpenCreateCircuitModal(false)}
      >
        <div className="circuit-form">
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
            <button
              variant="contained"
              type="submit"
              disabled={isLoadingCreatingCircuit}
            >
              Criar Circuito
            </button>
          </form>
        </div>
      </Modal>
    );
  };

  useEffect(() => {
    listCircuits();
  }, []); //eslint-disable-line

  return (
    <div className="circuit-container">
      {CreateCircuitModal()}
      <NavigateLeftColumn />
      <div className="rigth-content">
        <div className="lista-circuitos">
          <div className="list-action-area" style={{ display: "flex" }}>
            <h2>Lista de Circuitos</h2>
            <button onClick={() => setOpenCreateCircuitModal(true)}>
              Criar Circuito
            </button>
          </div>
          {circuits.length > 0 ? (
            <table>
              <thead>
                <tr>
                  <th>Circuit ID</th>
                  <th>Nome</th>
                  <th>Descrição</th>
                </tr>
              </thead>
              <tbody>
                {circuits.map((circuito) => (
                  <tr key={circuito.circuit_id}>
                    <td>{circuito.circuit_id}</td>
                    <td>{circuito.circuit_name}</td>
                    <td>{circuito.circuit_description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <div>vazio</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Circuits;
