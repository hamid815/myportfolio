import React from "react";
import "./Home.css";
import Me from "../assest/me1.png";



const Home = ({ homeState }) => {
  return (
    <div className="container">
      <div className="hero">
        <div className="home_left">
          {homeState.map((homes) => (
            <div key={homes.title}>
              <h2>{homes.title}</h2>
              <h1>{homes.name}</h1>
              <h3>{homes.role}</h3>
              <p>{homes.description}</p>
            </div>
          ))}
        </div>
        <div className="home_right">
          <img src={Me} alt="Profile" />
          
        </div>
      </div>
    </div>
  );
};

export default Home;
