import React from "react";
import "./Home.css";
import { useState } from "react";
import myImg from "../assest/Cristiano.jpg";
import Me from "../assest/me1.png";
const Home = ({ homeState }) => {
  return (
    <div className="container">
      <div class="hero">

        {homeState.map((homes) => (
          <div className="home_left" key={homes.title}>
            <h2>{homes.title}</h2>
            <h1>{homes.name}</h1>
            <h3>{homes.role}</h3>
            <p>{homes.description}</p>
          </div>
        ))}
        <div class="home_right">
          <div>
            <img src={Me} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
