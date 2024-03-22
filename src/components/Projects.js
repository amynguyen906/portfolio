import { React } from "react";
import NovelNest from "../images/novelnest.png";
import itunes from "../images/itunesgallery.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Projects() {

    const projects = [
        {
            name: 'NovelNest', 
            type: 'Website', 
            image: NovelNest,
            description: 'A book exchange web application using the MERN stack. Makes it easily accessible for users to add, edit, and delete book listings.', 
            technologies: ['ReactJS', 'ExpressJS', 'NodeJS', 'MongoDB'], 
            github: 'https://github.com/amynguyen906/NovelNest'
        },
        {
            name: 'API iTunes Gallery', 
            type: 'JavaFX App', 
            image: itunes,
            description: 'A GUI app integrated with Apple\'s iTunes Search API.', 
            technologies: ['Java', 'JavaFX'], 
            github: 'https://github.com/amynguyen906/Gallery-App'
        },
    ]
    return (
        <div className="bg-base-100 about py-20 px-36 flex flex-col items-center" id="projects">
          {/* Title */}
          <h1 className="text-5xl font-semibold p-2 my-10 rounded-lg inline-block bg-accent">
        Projects
      </h1>

          <div className= 'grid grid-cols-3 gap-8'>
            {projects.map((project, index) => (
                <div className="card w-96 bg-base-100 card-shadow">
                <figure className="m-2 rounded-none shadow-none h-64">
                    <img src={project.image} alt={project.name} />
                    </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {project.name}
                    <div className="badge badge-accent">{project.type}</div>
                  </h2>
                  <p className="mb-6">{project.description}</p>
                  <div className="tooltip tooltip-accent" data-tip="Github Repository">
                    <a href={project.github} target="_blank" className="">
                <FontAwesomeIcon icon={faGithub} className="text-3xl text-left" />
            </a>
        </div>
                  <div className="card-actions justify-end mt-3">
                    {project.technologies.map((tech, i ) => (
                        <div className="badge badge-outline p-1.5">{tech}</div> 
                    ))}
                  </div>
                </div>
              </div>
                




            ))}





          </div>
        </div>
      );
}   