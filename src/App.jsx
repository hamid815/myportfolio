import "./App.css";
import React, { useState, useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "boxicons/css/boxicons.min.css";



function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll qilish
  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Dark mode
  const [isWhiteBackground, setIsWhiteBackground] = useState(false);

  const handleButtonClick = () => {
    setIsWhiteBackground(!isWhiteBackground);
  };

  useEffect(() => {
    if (isWhiteBackground) {
      document.body.classList.add("darkMode");
    } else {
      document.body.classList.remove("darkMode");
    }
  }, [isWhiteBackground]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  //Usestateni ishlatish
  const [homeState, setHomeState] = useState([
    {
      title: "Hello I'm",
      name: "Shukurillayev Hamid",
      role: "Frontend Developer",
      description:
        "I am a frontend developer and have turned my passion for web technologies into my professional career. My daily work involves creating websites based on HTML, CSS, and JavaScript and developing intuitive interfaces for users.",
    },
  ]);

  const [aboutState, setAboutState] = useState([
    {
      title: "About Me",
      description:
        "I have been taking a frontend programming course for 1 years. So far, I have learned to create a website using HTML, CSS, JavaScript +REACT. I will not only be limited to this knowledge, but also become an excellent programmer in this field.",
      socialLinks: {
        instagram: "@_hamidjon._",
        facebook: "#hamidjon_shukurillayev",
        telegram: "@hamidjon815",
        phone: "+998-77-016-37-84",
      },
    },
  ]);

  const [skillsState, setSkillsState] = useState([
    {
      title: "My Skills",
      frontend: "I'm Frontend Developer",
      cpp: "About my beginner C++ course",
      htmlCss: "About my HTML and CSS skills",
    },
  ]);

  const [contactState, setContactState] = useState([
    {
      title: "Contact Me",
      description: "Adding Contact",
    },
  ]);

  return (
    <div className="App">
      <div className="container">
        <header>
          <div className="header">
            <h1>Hamid.</h1>
            <ul className="ull">
              <li className="home" onClick={() => scrollToSection(homeRef)}>
                Home
              </li>
              <li className="about" onClick={() => scrollToSection(aboutRef)}>
                About
              </li>
              <li className="skills" onClick={() => scrollToSection(skillsRef)}>
                Skills
              </li>
              <li
                className="contact"
                onClick={() => scrollToSection(contactRef)}
              >
                Contact
              </li>
            </ul>
            <button onClick={() => setIsWhiteBackground(!isWhiteBackground)} className="ligh_mode">
              {isWhiteBackground ? "🌙 Dark mode" : "☀️ Light mode"}
            </button>
          </div>
        </header>

        <div className="navi">
          <a href="https://www.instagram.com/_hamidjon._/">
            <i class='bx bxl-instagram'></i>
          </a>
          <a href="https://t.me/hamidjon815">
            <i class='bx bxl-telegram'></i>
          </a>
          <a href="https://www.facebook.com/profile.php?id=61576214425419&locale=ru_RU">
            <i class='bx bxl-facebook'></i>
          </a>
          
        </div>

        <div ref={homeRef}>
          <Home homeState={homeState} />
        </div>
        <div ref={aboutRef} data-aos="zoom-in">
          <About aboutState={aboutState} />
        </div>
        <div ref={skillsRef} data-aos="zoom-in">
          <Skills skillsState={skillsState} />
        </div>
        <div ref={contactRef} data-aos="zoom-in">
          <Contact contactState={contactState} />
        </div>
      </div>
      <footer>
        <h1 onClick={() => scrollToSection(homeRef)}>Hamid</h1>
        <div>
          <a href="https://www.instagram.com/_hamidjon._/">
            <i class='bx bxl-instagram'></i>
            Instagram
          </a>
          <a href="https://t.me/hamidjon815">
            <i class='bx bxl-telegram'></i>
            Telegram
          </a>
        </div>
          <p>All rights reserved &copy; 2025</p>
      </footer>
    </div>
  );
}

export default App;
