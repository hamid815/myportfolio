import React, { useState } from "react";
import "./Skills.css";


import MyPortfolio from "../assest/NiceAdmin.png";
import Alexp from "../assest/uzumscr.png";
import Game from "../assest/game.png";
import Alexpo from "../assest/Alexp.png";
import { motion } from "framer-motion";


const Skills = ({ skillsState }) => {
  const [activeSkill, setActiveSkill] = useState(null);

  const toggleSkill = (skillName) => {
    setActiveSkill((prev) => (prev === skillName ? null : skillName));
  };
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="container">
      <h3 className="my_skil">{skillsState[0].title}</h3>

      <div className="my_skills">
        {/* C# */}
        <div className="skill-card" data-aos="zoom-in">
          <div className="skill-flex">
            <i className="bx bx-code as"></i>
            <h2>{skillsState[0].cpp}</h2>
          </div>
          <button onClick={() => toggleSkill("cpp")}>
            {activeSkill === "cpp" ? "Close" : "View Details"}
          </button>
          {activeSkill === "cpp" && (
            <div className="skill-info">
              <p>
                I began my coding journey with C# .These languages helped me
                build strong programming logic.
              </p>
            </div>
          )}
        </div>

        {/* Html & CSS */}
        <div className="skill-card" data-aos="zoom-in">
          <div className="skill-flex">
            <i className="bx bx-code-alt"></i>
            <h2>{skillsState[0].htmlCss}</h2>
          </div>
          <button onClick={() => toggleSkill("htmlcss")}>
            {activeSkill === "htmlcss" ? "Close" : "View Details"}
          </button>
          {activeSkill === "htmlcss" && (
            <div className="skill-info">
              <p>
                I focus on building clean, responsive interfaces using HTML and
                CSS, and I'm actively growing my skills in JavaScript and React.
              </p>
            </div>
          )}
        </div>

        {/* FRONTEND */}
        <div className="skill-card" data-aos="zoom-in">
          <div className="skill-flex">
            <i className="bx bx-minus-front as"></i>
            <h2>{skillsState[0].frontend}</h2>
          </div>
          <button onClick={() => toggleSkill("frontend")}>
            {activeSkill === "frontend" ? "Close" : "View Details"}
          </button>
          {activeSkill === "frontend" && (
            <div className="skill-info">
              <p>
                I'm skilled in creating fast, responsive UIs using JavaScript
                and React. I enjoy turning designs into clean, functional
                interfaces with reusable components and modern React hooks.
              </p>
            </div>
          )}
        </div>

        {/* PROJECTS */}
        <div className="skill-card" data-aos="zoom-in">
          <div className="skill-flex">
            <i className="bx bx-line-chart as"></i>
            <h2>My Projects</h2>
          </div>
          <button onClick={() => toggleSkill("project")}>
            {activeSkill === "project" ? "Close" : "View Details"}
          </button>
          {activeSkill === "project" && (
            <div className="skill-info">
              <p>
                Portfolio site and responsive blog: I designed a modern
                portfolio and mobile-friendly blog using HTML/CSS.
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="myProjects" data-aos="zoom-in">
        <h2>My Projects</h2>
        <div className="projects">
          <div className="AlexPortfolio" data-aos="zoom-in">
            <h3>Alex Portfolio</h3>
            <a
              href="https://new-two-peach.vercel.app/#home"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Alexpo} alt="" />
            </a>
            <a href="https://github.com/hamid815/new">
              <abbr title="Open GitHub Repository"> <i className="bx bxl-github"></i></abbr>
             
            </a>
           
          </div>

          <div className="UzumMarket" data-aos="zoom-in">
            <h3>Uzum market</h3>
            <a
              href="https://market-uzum.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={Alexp} alt="" />
            </a>
            <a href="https://github.com/hamid815/marketUzum">
              <abbr title="Open GitHub Repository"> <i className="bx bxl-github"></i></abbr>
            </a>
           
          </div>
        </div>

        {!showMore && (
          <button className="showMore" onClick={() => setShowMore(true)}>
            Learn more
          </button>
        )}

        {showMore && (
          <div className="projects">
            <div className="Game" data-aos="zoom-in">
              <h3>Game</h3>
              <a
                href="https://vercel.com/hamids-projects-6499ec0d/game-rl5t"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Game} alt="" />
              </a>
              <a href="https://github.com/hamid815/game">
                <abbr title="OpenGitHub Repository"> <i className="bx bxl-github"></i></abbr>
              </a>
             
            </div>

            <div className="NiceAdmin" data-aos="zoom-in">
              <h3>NiceAdmin</h3>
              <a
                href="https://niceadmin-project.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={MyPortfolio} alt="" />
              </a>
              <a
                href="https://github.com/hamid815/niceadmin-project"
                target="_blank"
                rel="noopener noreferrer"
              >
                <abbr title=" Open GitHub Repository"> <i className="bx bxl-github"></i></abbr>
              </a>
             
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Skills;
