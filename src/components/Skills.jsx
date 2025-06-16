import React, { useState } from 'react';
import './Skills.css';
import Instargram from '../assest/Insatgram.png';
import Facebook from '../assest/Facebook.png';
import MyPortfolio from '../assest/Myportfolio.png';
import Alexp from '../assest/Alexportfolio.png'

const Skills = ({skillsState}) => {
  const [activeSkill, setActiveSkill] = useState(null);

  const toggleSkill = (skillName) => {
    setActiveSkill(prev => (prev === skillName ? null : skillName));
  };

  return (
    <div className="container">
      <h3 className="my_skil">{skillsState[0].title}</h3>

      <div className="my_skills">
        {/* FRONTEND */}
        <div className="skill-card" data-aos="zoom-in">
          <div className='skill-flex'>
          <i className='bx bx-minus-front as'></i>
          <h2>{skillsState[0].frontend}</h2>
          </div>
          <button onClick={() => toggleSkill('frontend')}>
            {activeSkill === 'frontend' ? 'Yopish' : 'Learn More'}
          </button>
          {activeSkill === 'frontend' && (
            <div className="skill-info">
              <p>
                I have turned my passion for web technologies into my professional career.
                I build websites using HTML, CSS, and JavaScript to create smooth user experiences.
              </p>
            </div>
          )}
        </div>

        {/* C++ */}
        <div className="skill-card" data-aos="zoom-in">
          <div className='skill-flex'>
          <i className='bx bxl-c-plus-plus as'></i>
          <h2>{skillsState[0].cpp}</h2>
          </div>
          <button onClick={() => toggleSkill('cpp')}>
            {activeSkill === 'cpp' ? 'Yopish' : 'Learn More'}
          </button>
          {activeSkill === 'cpp' && (
            <div className="skill-info">
              <p>
                I began my coding journey with C++ and C#. These languages helped me build strong programming logic and OOP concepts.
              </p>
            </div>
          )}
        </div>

        {/* Html & CSS */}
        <div className="skill-card" data-aos="zoom-in">
          <div className='skill-flex'>
          <i className='bx bx-code as'></i>
          <h2>{skillsState[0].htmlCss}</h2>
          </div>
          <button onClick={() => toggleSkill('htmlcss')}>
            {activeSkill === 'htmlcss' ? 'Yopish' : 'Learn More'}
          </button>
          {activeSkill === 'htmlcss' && (
            <div className="skill-info">
              <p>
                I focus on creating beautiful and responsive interfaces with HTML and CSS, ready to grow into JS and React.
              </p>
            </div>
          )}
        </div>

        {/* PROJECTS */}
        <div className="skill-card" data-aos="zoom-in">
          <div className='skill-flex'>
          <i className='bx bx-line-chart as'></i>
          <h2>About my Projects</h2>
          </div>
          <button onClick={() => toggleSkill('project')}>
            {activeSkill === 'project' ? 'Yopish' : 'Learn More'}
          </button>
          {activeSkill === 'project' && (
            <div className="skill-info">
              <p>
                Portfolio site and responsive blog: I designed a modern portfolio and mobile-friendly blog using HTML/CSS.
              </p>
            </div>
          )}
        </div>
      </div>

      <div className='myProjects' data-aos="zoom-in">
        <h2>My Projects</h2>
        <div className='projects'>
          <div className='instagram' data-aos="zoom-in">
            <h3>Instagram</h3>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <img src={Instargram} alt="" />
            </a>
          </div>

          <div className='facebook' data-aos="zoom-in">
            <h3>Facebook</h3>
            <a href="https://www.facebook.com/?locale=ru_RU" target="_blank" rel="noopener noreferrer">
              <img src={Facebook} alt="" />
            </a>
          </div>

          <div className='myPortfolio' data-aos="zoom-in">
            <h3>My Portfolio</h3>
            <a href="Home" target="_blank" rel="noopener noreferrer">
              <img src={MyPortfolio} alt="" />
            </a>
          </div>

          <div className='alexp' data-aos="zoom-in">
            <h3>Alex Portfolio</h3>
            <a href="https://www.aleksefo.com/" target="_blank" rel="noopener noreferrer">
              <img src={Alexp} alt="" />
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Skills;
