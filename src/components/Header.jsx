import React from "react";

import Logo from "../assets/logo.svg";

function Header() {
  return (
    <div
      style={{
        height: "48px",
        color: "rgb(157, 168, 183)",
        backgroundColor: "rgba(16, 20, 24, 0.8)",
        display: "flex",
        alignItems: "center",
        padding: "0px 12px",
      }}
    >
      <div
        style={{
          width: "30px",
          height: "30px",
          backgroundColor: "#CCC",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "80px",
          margin: "6px",
        }}
      >
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
