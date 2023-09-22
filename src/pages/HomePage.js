import React from "react";
import home from "../../src/assets/images.png";
import "./style/HomePage.css";
const HomePage = () => {
  return (
    <div>
      <div className="home-page">
        <div className="img-container">
          <img src={home}></img>

          <div>
            <button>click</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
