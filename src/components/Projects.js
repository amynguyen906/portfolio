import { React } from "react";
import NovelNest from "../images/novelnest.png";
import itunes from "../images/itunesgallery.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import MovieEbooking from "../images/movieebooking.png";

export default function Projects() {

    const projects = [
        {
          name: 'Movie e-Booking', 
          type: 'Website', 
          image: MovieEbooking,
          description: 'A movie ticket purchasing web application created using React and Springboot. Allows users to browse movies, select showtimes, and purchase tickets.', 
          technologies: ['ReactJS', 'Java', 'Springboot', 'MySQL'], 
          github: 'https://github.com/ljason18/SWE-Project'
        },
        {
          name: 'Novel Nest', 
          type: 'Website', 
          image: NovelNest,
          description: 'A book exchange web application created with the MERN stack. Makes it easily accessible for users to add, edit, and delete book listings.', 
          technologies: ['ReactJS', 'ExpressJS', 'NodeJS', 'MongoDB'], 
          github: 'https://github.com/amynguyen906/NovelNest'
        },
        {
            name: 'API iTunes Gallery', 
            type: 'JavaFX App', 
            image: itunes,
            description: 'A GUI app integrated with Apple\'s iTunes Search API. Filters search results based on user input and media type and displays associated images.', 
            technologies: ['Java', 'JavaFX'], 
            github: 'https://github.com/amynguyen906/Gallery-App'
        },
    ]
    return (
        <div className="bg-base-100 about py-20 px-36 flex flex-col items-center" id="projects">
          {/* Title */}
          <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
          <h1 className="text-5xl font-semibold p-2 my-10 rounded-lg inline-block bg-accent">
        Projects
      </h1>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
          <div className= 'grid grid-cols-3 gap-8'>
          
            {projects.map((project, index) => (
                <div className="card w-96 bg-base-100 card-shadow ">
                <figure className="m-2 rounded-none shadow-none h-64">
                    <img src={project.image} alt={project.name} />
                    </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {project.name}
                    <div className="badge badge-accent p-1 rounded-lg">{project.type}</div>
                  </h2>
                  <p className="mb-3">{project.description}</p>
                  <div>
                    <a href={project.github} target="_blank" className="">
                    <div className="tooltip tooltip-accent tooltip-right text-left" data-tip="Github Repository">
                      <FontAwesomeIcon icon={faGithub} className="text-3xl text-left" />
                      </div>
                    </a>
                  </div>
                  <div className="card-actions justify-start mt-3">
                    {project.technologies.map((tech, i ) => (
                        <div className="badge badge-accent rounded-lg p-1">{tech}</div> 
                    ))}
                  </div>
                </div>
              </div>
                




            ))}
          





          </div>
          </AnimationOnScroll>
        </div>
      );
}   