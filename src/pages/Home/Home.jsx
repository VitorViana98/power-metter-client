import React from "react";

import NavigateLeftColumn from "../../components/NavigateLeftColumn/NavigateLeftColumn";

import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <NavigateLeftColumn />
      <div className="rigth-content">direita</div>
    </div>
  );
}

export default Home;
