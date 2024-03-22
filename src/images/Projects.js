import '../css/Projects.css';
import projectsData from '../data/ProjectData.js';
import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
  return (
    <div className="projects">
      <AnimationOnScroll animateIn="animate__fadeIn">
        <h1 className="heading">My Projects</h1>
      </AnimationOnScroll>
      <AnimationOnScroll animateIn="animate__fadeInUp">
        <div>
          {projectsData.map((project) => (
            <div key={project.id} className="projects-grid">
              <div className="project-info">
                
              {Array.isArray(project.tech) && (
                  <div className="tech-container">
                    {project.tech.map((tech, index) => (
                      <div key={index} className="tech-item">
                        {tech}
                      </div>
                    ))}
                  </div>
                )}

                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faGithub} className='github-icon' size='lg' />
                </a>
              </div>
              <div>
                <img src={project.image} alt={project.title} />
              </div>
            </div>
          ))}
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default Projects;