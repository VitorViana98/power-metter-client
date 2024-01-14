import React from "react";

import {
   CIRCUIT_ROUTE
} from "../../consts";

import { useNavigate } from "react-router-dom";

import "./NavigateLeftColumn.css";

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
        <div
          className="left-content-action-item"
          onClick={() => redirect(CIRCUIT_ROUTE)}
        >
          Circuitos
        </div>
      </div>
      <div className="left-content-footer"></div>
    </div>
  );
}
