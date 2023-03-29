import '../css/style.css';
import { FaCode, FaDownload } from 'react-icons/fa';

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1 className="heading"><span className="blue">Aspiring</span> <span >Developer</span></h1>
        <p>Hi My name is Matt Hicks, I'm a graduating IT student from Monash University. I love to build different types of applications ranging from hobby scripts all the way through to full web applications. </p>
        <div className="cta-buttons">
          <button className="cta-button blue-button">
            <FaCode className="button-icon" />
            View Projects
          </button>
          <button className="cta-button ghost-button">
            <FaDownload className="button-icon" />
            Download Resume
          </button>
        </div>
      </div>
    </div>
  );
}