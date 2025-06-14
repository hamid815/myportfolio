import React from "react";
import "./About.css";
import { useState } from "react";
import myImg from "../assest/Cristiano.jpg";
import Me from "../assest/me.png";

const About = ({ aboutState }) => {
  return (
    <div className="container">
      <div class="contents">
        <h2 className="bor">{aboutState[0].title}</h2>

        <div class="content">
          <div class="content_left" data-aos="slide-right">
            <img src={Me} alt="" />

            <div>
              <h3>{aboutState[0].socialLinks.instagram}</h3>
              <h4>{aboutState[0].socialLinks.facebook}</h4>
            </div>
          </div>

          <div class="content_right" data-aos="slide-left">
            <h3>I'm Frontend developer</h3>
            <h4>And i'm Junior</h4>
            <p>{aboutState[0].description}</p>

            {aboutState.map((abouts) => (
              <div className="content_about" key={abouts.title}>
                <h2>
                  Instagram: <span>{abouts.socialLinks.instagram}</span>
                </h2>
                <h2>
                  Facebook: <span>{abouts.socialLinks.facebook}</span>
                </h2>
                <h2>
                  Telegram: <span>{abouts.socialLinks.telegram}</span>
                </h2>
                <h2>
                  Tel: <span>{abouts.socialLinks.phone}</span>
                </h2>
              </div>
            ))}
            <a href="i.docx" download >
            <button className="cv">All download CV</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
