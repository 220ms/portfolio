import '../css/style.css';
import { FaCode} from 'react-icons/fa';



export default function Hero() {

  const viewProjects = () => {
    document.getElementById('projects').scrollIntoView({behavior: 'smooth'});
  };

  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1 className="heading"><span className="blue">Current</span> <span >Software Developer</span></h1>
        <p>Hi, my name is Matt Hicks. I'm a software developer with a passion for building a wide range of applications, from hobby scripts to full-scale web applications. </p>
        <div className="cta-buttons">
          <button className="cta-button blue-button" id="view-projects" onClick={viewProjects}>
            <FaCode className="button-icon" />
            View Projects
          </button>
        </div>
      </div>
    </div>
  );
}