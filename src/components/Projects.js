import { React } from "react";
import NovelNest from "../images/novelnest.png";
import itunes from "../images/itunesgallery.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import MovieEbooking from "../images/movieebooking.png";
import Capstone from "../images/capstone.png";

export default function Projects() {

    const projects = [
      {
        name: 'Monitoring System', 
        type: 'Flask App', 
        image: Capstone,
        description: 'A Python-Flask dashboard that analyzes sensor data to monitor energy use, temperature, and CO2 emissions in real time. Created for UGA Engineering Capstone 24-25.', 
        technologies: ['Python', 'Flask', 'HTML/CSS'], 
        github: ''
      },
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
        <div className="bg-base-100 about py-20 px-6 lg:px-36 flex flex-col items-center" id="projects">
          {/* Title */}
          <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
          <h1 className="text-5xl font-semibold p-2 my-10 rounded-lg inline-block bg-accent">
        Projects
      </h1>
      </AnimationOnScroll>

      <AnimationOnScroll animateIn="animate__fadeIn" animateOnce={true}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          
            {projects.map((project, index) => (
                <div className="card w-full max-w-md mx-auto bg-base-100 card-shadow">
                <figure className="m-2 rounded-none shadow-none h-64">
                    <img src={project.image} alt={project.name} />
                    </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    {project.name}
                    <div className="badge badge-accent rounded-lg px-2 py-1 text-xs sm:text-sm whitespace-nowrap break-words">
                    {project.type}
                  </div>
                  </h2>
                  <p className="mb-3">{project.description}</p>
                  <div>
                    {project.github ? (
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <div className="tooltip tooltip-accent tooltip-right text-left" data-tip="Github Repository">
                          <FontAwesomeIcon icon={faGithub} className="text-3xl text-left" />
                        </div>
                      </a>
                    ) : (
                      <div className="text-sm md:text-md italic text-neutral-content">Private Repository</div>
                    )}
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