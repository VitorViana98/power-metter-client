import React from "react";

import { CIRCUIT_ROUTE, HOME_ROUTE } from "../../consts";

import { useNavigate } from "react-router-dom";

import "./NavigateLeftColumn.css";
import Button from "../Button/Button";

export default function NavigateLeftColumn() {
  const navigate = useNavigate();

  const redirect = (route) => {
    if (route && route === window.location.pathname) {
      return;
    } else if (route) {
      return navigate(route);
    }
  };

  return (
    <div className="left-content">
      <div className="left-content-action">
        <Button
          onClick={() => redirect(HOME_ROUTE)}
        >
          Home
        </Button>
        <Button
          onClick={() => redirect(CIRCUIT_ROUTE)}
        >
          Circuitos
        </Button>
      </div>
      <div className="left-content-footer"></div>
    </div>
  );
}
