import '../css/style.css';
import { useState } from 'react';

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="top-nav">
      <div>
        <h1 className="heading"><a href="#">Port<span className="blue">folio</span></a></h1>
      </div>
      <div className="link-list">
        <a href="#">Home</a>
        <a href="#">About Me</a>
        <a href="#">Projects</a>
        <a href="#">Contact Me</a>
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

const navbar = document.querySelector('.top-nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navbar.classList.add('solid');
  } else {
    navbar.classList.remove('solid');
  }
});

