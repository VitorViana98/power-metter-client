import React from "react";

import { HOME_ROUTE, LOGIN_ROUTE, CIRCUIT_ROUTE } from "../../consts";

import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import "./NavigateLeftColumn.css";

export default function NavigateLeftColumn() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("params");
    navigate(LOGIN_ROUTE);
  };

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
          onClick={() => redirect(HOME_ROUTE)}
        >
          Home
        </div>
        <div
          className="left-content-action-item"
          onClick={() => redirect(CIRCUIT_ROUTE)}
        >
          Circuitos
        </div>
        {/* <div className="left-content-action-item">Dashboard</div> */}
      </div>
      <div className="left-content-footer">
        <Button onClick={logout} variant="contained">
          Logout
        </Button>
      </div>
    </div>
  );
}
