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
            id = {project.id}
            key = {project.id}
        />
    })


  return (
    <div className="Projects" id="projects">
        <h1>My Projects</h1>
        <div className="projects-container">
        {projectsData}
        </div>

    </div>
    
  );
}

