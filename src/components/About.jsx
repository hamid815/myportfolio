import React from "react";
import "./About.css";
import Me from "../assest/me.png";

const About = ({ aboutState }) => {
  return (
    <div className="container">
      <div className="contents">
        <h2 className="bor">{aboutState[0].title}</h2>

        <div className="content">
          <div className="content_left">
            <img src={Me} alt="Me" />
            <div>
              <h3>{aboutState[0].socialLinks.instagram}</h3>
              <h4>{aboutState[0].socialLinks.facebook}</h4>
            </div>
          </div>

          <div className="content_right">
            <h3>I'm Frontend developer</h3>
            <h4>And I'm Junior</h4>
            <p>{aboutState[0].description}</p>

            {aboutState.map((abouts) => (
              <div className="content_about" key={abouts.title}>
                <h2>Instagram: <span>{abouts.socialLinks.instagram}</span></h2>
                <h2>Facebook: <span>{abouts.socialLinks.facebook}</span></h2>
                <h2>Telegram: <span>{abouts.socialLinks.telegram}</span></h2>
                <h2>Tel: <span>{abouts.socialLinks.phone}</span></h2>
              </div>
            ))}

            <a href="i.docx" download>
              <button className="cv">All download CV</button>
            </a>
          </div>
        </div>

        <div className="mySkills">
          <div className="mySkill">
            <div className="mySkillname">
              HTML <span className="percentage">95%</span>
            </div>
            
            <div className="progress-bar">
              <div className="progress" style={{ width: "95%" }}></div>
            </div>
          </div>

          <div className="mySkill">
            <div className="mySkillname">
              CSS <span className="percentage">90%</span>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: "90%" }}></div>
            </div>
          </div>

          

          <div className="mySkill">
            <div className="mySkillname">
              JavaScript <span className="percentage">80%</span>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: "80%" }}></div>
            </div>
          </div>


          <div className="mySkill">
            <div className="mySkillname">
              React <span className="percentage">85%</span>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: "85%" }}></div>
            </div>
          </div>

          <div className="mySkill">
            <div className="mySkillname">
              SAS <span className="percentage">80%</span>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: "85%" }}></div>
            </div>
          </div>

          <div className="mySkill">
            <div className="mySkillname">
              Bootsrap <span className="percentage">80%</span>
            </div>
            <div className="progress-bar">
              <div className="progress" style={{ width: "75%" }}></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default About;
