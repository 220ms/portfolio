import '../css/style.css';
import { useState, useEffect } from 'react';

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // use the useEffect to tell react to perform this operation when the component is loaded.
  useEffect(() => {
    const navbar = document.getElementById('top-nav')
    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        navbar.classList.add('solid');
      } else {
        navbar.classList.remove('solid');
      }
    });
  }, []);


  return (
    <div className="top-nav" id="top-nav">
      <div>
        <h1 className="heading"><a href="#">Port<span className="blue">folio</span></a></h1>
      </div>
      <div className="link-list">
        <a href="#">Home</a>
        <a href="#about">About Me</a>
        <a href="#projects">Projects</a>
      </div>
      <div className="burger-icon" onClick={toggleMenu}>
        <img src={require("../images/burger-icon.png")} alt="Menu" />
      </div>
      <div className={`vertical-menu ${showMenu ? "show" : ""}`}>
        <div className="close-icon" onClick={toggleMenu}>
        <img src={require("../images/close-window.png")} alt="Menu" />
        </div>
        <a href="#" onClick={toggleMenu}>Home</a>
        <a href="#" onClick={toggleMenu}>About Me</a>
        <a href="#" onClick={toggleMenu}>Projects</a>
        <a href="#" onClick={toggleMenu}>Contact Me</a>
      </div>
    </div>
  );
}




