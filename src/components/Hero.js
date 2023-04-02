import '../css/style.css';
import { FaCode} from 'react-icons/fa';



export default function Hero() {

  const viewProjects = () => {
    document.getElementById('projects').scrollIntoView({behavior: 'smooth'});
  };

  return (
    <div className="hero-container">
      <div className="hero-text">
        <h1 className="heading"><span className="blue">Aspiring</span> <span >Developer</span></h1>
        <p>Hi My name is Matt Hicks, I'm a graduating IT student from Monash University. I love to build different types of applications ranging from hobby scripts all the way through to full web applications. </p>
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