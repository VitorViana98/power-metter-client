import React from "react";

import Logo from "../../assets/logo.svg";
import { LOGIN_ROUTE } from "../../consts";

import { useNavigate } from "react-router-dom";

import "./Header.css";

function Header() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("params");
    navigate(LOGIN_ROUTE);
  };

  return (
    <div className="header-container">
      <div className="icon-container">
        <img
          src={Logo}
          alt="logo"
          style={{ height: "24px", width: "24px", marginLeft: "2px" }}
        />
      </div>
      PowerView
    </div>
  );
}

export default Header;
