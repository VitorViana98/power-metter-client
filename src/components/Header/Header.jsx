import React from "react";

import Logo from "../../assets/logo.svg";

import { useNavigate } from "react-router-dom";

import "./Header.css";

function Header() {
  const navigate = useNavigate();

  const redirect = (route) => {
    if (route && route === window.location.pathname) {
      return;
    } else if (route) {
      return navigate(route);
    }
  };

  return (
    <div className="header-container">
      <div
        style={{
          width: "fit-content",
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
        }}
        onClick={() => redirect("/home")}
      >
        <div className="icon-container">
          <img
            src={Logo}
            alt="logo"
            style={{ height: "24px", width: "24px", marginLeft: "2px" }}
          />
        </div>
        PowerView
      </div>
    </div>
  );
}

export default Header;
