import React from "react";

import Logo from "../../assets/logo.svg";


import "./Header.css";

function Header() {

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
