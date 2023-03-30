import '../css/style.css';
import ProjectCard from './ProjectCard';
import projects from '../data/projects';

export default function Projects() {
    const projectsData = projects.map(project => {
        return <ProjectCard 
            image = {project.image}
            title = {project.title}
            description = {project.description}
            technologies = {project.technologies}
            link = {project.link}
        />
    })
  return (
    <div className="Projects">
        <h1>My Projects</h1>
        <div className="projects-container">
        {projectsData}
        </div>

    </div>
    
  );
}